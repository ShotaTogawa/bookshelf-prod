import React, { Component } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import { api } from "../../../../../api";
import setAuthToken from "../../../../../utils/setAuthToken";
import history from "../../../../../history";
import Spinner from "../../../../../spinner/Spinner";

class ImageModal extends Component {
  state = {
    file: null,
    modal: false,
    imageUrl: "",
    loading: false
  };

  onFileChange = event => {
    this.setState({ file: event.target.files[0] });
  };

  updateS3Bucket = async uploadConfig => {
    delete api.defaults.headers.common["Authorization"];
    await api.put(uploadConfig.data.url, this.state.file, {
      headers: {
        "Content-Type": this.state.file.type
      }
    });
  };

  uploadFile = async () => {
    const { userId, bookId } = this.props;
    this.setState({ loading: true });

    if (bookId) {
      const uploadConfig = await api.get(`/api/upload/${userId}/${bookId}`);
      await this.updateS3Bucket(uploadConfig);
      try {
        const user = JSON.parse(localStorage.user);
        await setAuthToken(user.token);
        await api.put(`/api/upload/${userId}/${bookId}`, {
          imageUrl: uploadConfig.data.key
        });
        this.setState({ loading: false });
        this.props.closeModal();
        history.push(`/books`);
      } catch (e) {
        this.setState({ loading: false });
        console.log(e);
      }
    } else {
      const uploadConfig = await api.get(`/api/upload/${userId}`);
      await this.updateS3Bucket(uploadConfig);
      try {
        const user = JSON.parse(localStorage.user);
        await setAuthToken(user.token);
        await api.put(`/api/upload/${userId}`, {
          avatar: uploadConfig.data.key
        });
        this.props.closeModal();
        history.push("/user");
      } catch (e) {
        console.log(e);
      }
    }
  };

  clearFile = () => this.setState({ file: null });

  render() {
    const { modal, closeModal, header } = this.props;
    return this.state.loading ? (
      <Spinner />
    ) : (
      <Modal basic open={modal} onClose={closeModal}>
        <Modal.Header>{header ? header : "Select an Image File"}</Modal.Header>
        <Modal.Content>
          <input type="file" accept="image/*" onChange={this.onFileChange} />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.uploadFile} color="green" inverted>
            <Icon name="checkmark" /> Send
          </Button>
          <Button color="red" inverted onClick={closeModal}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ImageModal;

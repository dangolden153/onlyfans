import React from 'react'
import {Modal,Input,Button,Icon} from 'semantic-ui-react'
// import {} from 'mine-types'


const FileModal =({closeModal,modal})=>{

    return(
        <Modal basic open={modal} onClose={closeModal}>

            <Modal.Header>Select an Image File </Modal.Header>

            <Modal.Content>
            <Input
            fluid
            name="file"
            type='file'
            label="File types: jpeg,jpg,png"
            placeholder="upload a file"
            />
            </Modal.Content>


            <Modal.Actions>
                <Button
                color='red'
                inverted
                onClick={closeModal}
                >
                <Icon name='remove'/>
                    cancel
                </Button>

                <Button
                color='green'
                inverted
                >
                <Icon name='checkmark'/>
                send
                </Button>

            </Modal.Actions>
        </Modal>

    )
}

export default FileModal
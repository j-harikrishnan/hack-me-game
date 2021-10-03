import React from "react";
import ReactModal from 'react-modal';


export default ({
    isOpen, onClose, children, maxWidth = '800px'
}) => {

    return <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '9000'
            },
            content: {
                position: 'unset',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                border: 'none!important',
                background: 'transparent',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '0',
                outline: 'none',
                padding: '0',
                maxWidth: maxWidth
            }
        }}
    >
        {children}
    </ReactModal>

};
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import classNames from 'classnames'

import { getProductImg } from 'store/actions'
import { store } from 'store'

const UploadImg = ({name, className, getImg}) => {
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        if (isJpgOrPng && isLt2M) {
            store.dispatch(getProductImg(file))
        }
        return isJpgOrPng && isLt2M;
    }


    const handleCahnge = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
        }
        if (info.file.status === 'done') {
            
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setImageUrl(imageUrl)
                setLoading(false)
            });

        }
    }
    const uploadButton = (
        <div className='upload-btn'>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="upload-text">Загризить</div>
        </div>
    );

    return (
        <Upload
            name={name}
            listType="picture"
            className={classNames(
                "uploader",
                className
            )}
            showUploadList={false}
            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleCahnge}
        >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
    );
};

UploadImg.defaultProps = {
    name: '',
    clasName: '',
    getImg: () => {},
}
UploadImg.propTypes = {
    name: PropTypes.string,
    clasName: PropTypes.string,
    getImg: PropTypes.func,
}

export default UploadImg;

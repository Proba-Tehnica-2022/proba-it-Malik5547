import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

// import { ImageConfig } from '../../config/imageConfig';
// import uploadImg from '../../assets/cloud-upload-regular-240.png';
import styled from "styled-components";

const DropFileContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10em;
  border: 1px solid #252F65;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
`

const DropFileLabel = styled.div`
  padding: 1em 1em;
  font-style: normal;
  font-weight: 700;
  font-size: 0.9em;
  text-align: start;
  line-height: 20px;

  color: rgba(6, 17, 79, 0.3);
`

const FileInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  ::file-selector-button {
    display: none;
  }
  
  //&:hover, dragover {
  //  opacity: 0.6;
  //}
`

const DropFilePreview = styled.div`
  margin-top: 30%;

`

const DropFilePreviewTitle = styled.p`
  font-weight:  500;
  margin-bottom: 20px;
`

const DropFilePreviewItem = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  background-color: var(--input-bg);
  padding: 15px;
  border-radius: 20px;
  
  &:hover {
    opacity: 1;
  }
`

const DopFilePreviewImg = styled.img`
  width: 50px;
  margin-right: 20px;
`

const DropFilePreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const DropFilePreviewDel = styled.span`
  background-color: var(--box-bg);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
`

const DropFileInput = (props) => {

    const wrapperRef = useRef(null);

    const [file, setFile] = useState(null);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            // const updatedList = [...fileList, newFile];
            // setFileList(updatedList);
            setFile((newFile));
            props.onFileChange(newFile);
        }
    }

    const fileRemove = (file) => {
        // const updatedList = [...fileList];
        const updatedFile = null;
        // updatedList.splice(fileList.indexOf(file), 1);
        // setFileList(updatedList);
        setFile((updatedFile));
        props.onFileChange(updatedFile);
    }

    return (
        <>
            <DropFileContainer
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <DropFileLabel>
                    {/*<img src={uploadImg} alt="" />*/}
                    <p>drag & drop image or click to upload</p>
                </DropFileLabel>
                <FileInput accept={".png,.jpg,.jpeg,.gif"} type="file" value="" onChange={onFileDrop}/>
            </DropFileContainer>
            {
                file != null ? (
                    <DropFilePreview>
                        <DropFilePreviewTitle>
                            Ready to upload
                        </DropFilePreviewTitle>
                        {
                                <DropFilePreviewItem  >
                                    {/*<DopFilePreviewImg src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />*/}
                                    <DropFilePreviewInfo>
                                        <p>{file.name}</p>
                                        <p>{file.size}B</p>
                                    </DropFilePreviewInfo>
                                    <DropFilePreviewDel onClick={() => fileRemove(file)}>x</DropFilePreviewDel>
                                </DropFilePreviewItem>

                        }
                    </DropFilePreview>
                ) : null
            }
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;
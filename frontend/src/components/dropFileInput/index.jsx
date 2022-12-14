import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

// import { ImageConfig } from '../../config/imageConfig';
// import uploadImg from '../../assets/cloud-upload-regular-240.png';
import CloseBtnImg from "../../images/closeBtn.png"
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
  pointer-events: ${props => props.fileUploaded ? "none" : "auto"};
  cursor: ${props => props.fileUploaded ? "default" : "pointer"};

  ::file-selector-button {
    display: none;
  }
`

const DropFilePreview = styled.div`
  //margin-top: 30%;
  height: 100%;
  padding: 1em 1em;

`

const DropFilePreviewTitle = styled.p`
  margin-top: 0.5em;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #06114F;
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

const DropFilePreviewImg = styled.img`
  height: 80%;
  //margin-right: 20px;
`

const DropFilePreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const DropFilePreviewDel = styled.img`
  margin-left: 1em;

  //width: 1.5em;
  height: 1em;
  display: inline-block;
  //text-align: center;
  //line-height: 1em;
  //display: block;

  border-radius: 50%;

  &:hover{
    cursor: pointer;
  }
  
  & img{
    height: 100%;
  }
  
`

const DropFileInput = (props) => {

    const wrapperRef = useRef(null);

    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState();

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            // const updatedList = [...fileList, newFile];
            // setFileList(updatedList);
            setFile((newFile));
            // setFile(URL.createObjectURL(newFile));
            setFileUrl(URL.createObjectURL(e.target.files[0]));
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
                { file == null ? (
                    <DropFileLabel>
                        <p>drag & drop image or click to upload</p>
                    </DropFileLabel>
                ) : null }

                <FileInput disabled={file != null ? true : false} fileUploaded={file != null ? true : false} accept={".png,.jpg,.jpeg,.gif"} type="file" value="" onChange={onFileDrop}/>

                {
                file != null ? (
                    <DropFilePreview>
                        <DropFilePreviewImg src={fileUrl} alt={"Test"}/>

                        <DropFilePreviewTitle>
                            {file.name}
                            <DropFilePreviewDel src={CloseBtnImg} onClick={() => fileRemove(file)}></DropFilePreviewDel>


                        </DropFilePreviewTitle>
                        {/*<DropFilePreviewDel src={CloseBtnImg} onClick={() => fileRemove(file)}></DropFilePreviewDel>*/}
                        {
                                <DropFilePreviewItem  >
                                    {/*<DopFilePreviewImg src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />*/}
                                    {/*<DropFilePreviewInfo>*/}
                                    {/*    <p>{file.name}</p>*/}
                                    {/*    <p>{file.size}B</p>*/}
                                    {/*</DropFilePreviewInfo>*/}
                                    {/*<DropFilePreviewDel onClick={() => fileRemove(file)}>x</DropFilePreviewDel>*/}
                                </DropFilePreviewItem>

                        }
                    </DropFilePreview>
                ) : null
                }
            </DropFileContainer>
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;
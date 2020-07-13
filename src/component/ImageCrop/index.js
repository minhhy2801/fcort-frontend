import React from 'react';
import AvatarEditor from 'react-avatar-editor';
import './styles.scss';
const ImageCrop = ({imageSrc, setEditorRef, scaleValue, onScaleChange}) => (
  <div>
    <div className="editorOverlayInner">
      <div className="editorModalContent clearfix">
        <div className="cropCnt">
          <AvatarEditor
            image={imageSrc}
            border={50}
            borderRadius={100}
            scale={scaleValue}
            rotate={0}
            ref={setEditorRef}
            className="cropCanvas"
          />
        </div>
        <div className="rangeCnt">
          <input
            style={{width: '100%'}}
            type="range"
            value={scaleValue}
            name="points"
            min="1"
            max="5"
            step="0.1"
            onChange={onScaleChange}
          />
        </div>
      </div>
    </div>
  </div>
);

export default ImageCrop;

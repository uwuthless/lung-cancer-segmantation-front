import React from "react";

const UploadForm = () => {
    let ref = React.createRef();

    const logFile = (e) => {
        e.preventDefault();
        console.log(ref.current.files);
    }
    return (
        <div className="ui container">
            <form
                  encType="multipart/form-data"
                  className={'ui form '}
                  onSubmit={(e)=>{logFile(e)}}
            >
                <label>Введите описание снимка</label>
                <input type="text"/>
                <label>Выберите DICOM снимок на жестком диске</label>
                <input type="file"
                       name="file"
                       className={'field'}
                       style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
                       ref={ref}
                       multiple
                />
                <button className={"ui bottom attached button fluid primary"}>Отправить снимок</button>
            </form>
        </div>
    );
};

export default UploadForm;

import * as S from "./Upload01.styles";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useEffect, useState } from "react";

interface IUploadProps {
  defaultUrls?: string[];
  onChangeFileUrls: (fileUrl: File, index: number) => void;
}

export default function Uploads01(props: IUploadProps) {
  // console.log(props.defaultUrls);
  // const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imgUrl, setImgUrl] = useState<string[]>(["", ""]);
  useEffect(() => {
    if (!props?.defaultUrls) return;
    const tempImgUrl = [...imgUrl];
    tempImgUrl.map((el, idx) => {
      if (props?.defaultUrls[idx] !== undefined) {
        tempImgUrl[
          idx
        ] = `https://storage.googleapis.com/${props?.defaultUrls[idx]}`;
      } else {
        tempImgUrl[idx] = "";
      }
    });
    setImgUrl(tempImgUrl);
  }, [props.defaultUrls]);

  const onChangeFile =
    (idx: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file === undefined) return;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          const tempImgUrls = [...imgUrl];
          tempImgUrls[idx] = event.target?.result;
          setImgUrl(tempImgUrls);
          props.onChangeFileUrls(file, idx);
        }
      };
    };

  return (
    <>
      <S.InputFileWrap>
        {imgUrl?.map((el, idx) => (
          <S.InputFile key={uuidv4()}>
            {el !== "" ? <img src={el} /> : <span>Upload</span>}
            <input type="file" onChange={onChangeFile(idx)} />
          </S.InputFile>
        ))}
      </S.InputFileWrap>
    </>
  );
}

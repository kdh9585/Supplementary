import * as S from "./ProductWrite.styles";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import KakaoMap from "../../../commons/kakaomap";
import { Address } from "react-daum-postcode";
import { Modal, Upload } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCreateUsedItem } from "../../../commons/hooks/mutation/useCreateUsedItem";
import { useUpdateUsedItem } from "../../../commons/hooks/mutation/useUpdateUsedItem";
import { UploadFile } from "@mui/icons-material";
import { useUploadFile } from "../../../commons/hooks/mutation/useUploadFile";
import Uploads01 from "../../../commons/uploads/01/Upload01.index";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWrite(props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [addressName, setAddressName] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const { createSubmit } = useCreateUsedItem();
  const { uploadFile } = useUploadFile();
  const { updateSubmit } = useUpdateUsedItem();
  const { register, setValue, handleSubmit, trigger, reset } = useForm({
    defaultValues: {
      name: "",
      remarks: "",
      contents: "",
      price: "",
      tags: [],
      images: ["", ""],
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (props.data) {
      const EditData = {
        name: props.data?.fetchUseditem?.name,
        remarks: props.data?.fetchUseditem?.remarks,
        contents: props.data?.fetchUseditem?.contents,
        price: props.data?.fetchUseditem?.price,
        tags: [...props.data?.fetchUseditem.tags],
        images: [...props.data?.fetchUseditem.images],
      };
      reset({ ...EditData });
    }
  }, [props.data]);
  console.log(props.data?.fetchUseditem?.contents);

  const onCompleteAddressSearch = (address: Address) => {
    setAddressName(address.address);
    setZipcode(address.zonecode);
    setIsOpen((prev) => !prev);
  };

  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const onChangeFileUrls = (fileUrl: File, index: number) => {
    const newFileUrls = [...files];
    newFileUrls[index] = fileUrl;
    setFiles(newFileUrls);
  };

  const onClickSubmit = async (data) => {
    const results = await Promise.all(
      files.map(async (file) => await uploadFile({ variables: { file } }))
    );
    const resultUrls = results.map((el) =>
      el !== undefined ? el.data?.uploadFile.url : ""
    );
    setValue("images", resultUrls);
    if (!props.isEdit) {
      void createSubmit(data, resultUrls);
    } else {
      void updateSubmit(props.useditemId, data, resultUrls);
    }
  };

  return (
    <>
      {isOpen && (
        <S.AddressModal
          visible={true}
          onCancel={() => setIsOpen(false)}
          onOk={() => setIsOpen(false)}
        >
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.InnerWrapper onSubmit={handleSubmit(onClickSubmit)}>
          <S.WriteTitleBox>
            <S.WriteTitle>?????? {props.isEdit ? "??????" : "??????"}</S.WriteTitle>
          </S.WriteTitleBox>
          <S.ContentWrapper>
            <S.SubTitle>?????????</S.SubTitle>
            <S.FormInput
              type="text"
              placeholder="???????????? ??????????????????"
              {...register("name")}
            />
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.SubTitle>????????????</S.SubTitle>
            <S.FormInput
              type="text"
              placeholder="??????????????? ??????????????????"
              {...register("remarks")}
            />
          </S.ContentWrapper>
          <S.ContentWrapper style={{ paddingBottom: "67px" }}>
            <S.SubTitle>????????????</S.SubTitle>
            <S.Quill
              onChange={onChangeContents}
              defaultValue={props.data?.fetchUseditem?.contents}
            />
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.SubTitle>????????????</S.SubTitle>
            <S.FormInput
              type="text"
              placeholder="??????????????? ??????????????????"
              {...register("price")}
            />
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.SubTitle>????????????</S.SubTitle>
            <S.FormInput
              type="text"
              placeholder="#?????? #?????? #??????"
              {...register("tags")}
            />
          </S.ContentWrapper>
          <S.AddrressWrapper>
            <S.SubTitle style={{ paddingBottom: "38px " }}>
              ???????????????
            </S.SubTitle>
            <S.AddrressInputWrapper>
              <S.KakaoMapWrapper>
                <KakaoMap />
              </S.KakaoMapWrapper>
              <S.AddrressSort>
                <S.ZipWrapper>
                  <S.ZipcodeInput
                    type="text"
                    readOnly
                    value={zipcode}
                    placeholder="07250"
                    zipcode={!!zipcode}
                  />
                  <S.ZipBtn type="button" onClick={onClickAddressSearch}>
                    ???????????? ??????
                  </S.ZipBtn>
                </S.ZipWrapper>
                <S.ZoneInput type="text" value={addressName} />
                <S.ZoneInput type="text" />
              </S.AddrressSort>
            </S.AddrressInputWrapper>
          </S.AddrressWrapper>
          <S.UploadWrapper>
            <S.SubTitle>????????????</S.SubTitle>
            <Uploads01
              onChangeFileUrls={onChangeFileUrls}
              defaultUrls={props.data?.fetchUseditem?.images}
            />
          </S.UploadWrapper>
          <S.BtnWrapper>
            <S.CancelBtn type="button" onClick={router.back}>
              ??????
            </S.CancelBtn>
            <S.RegisBtn>{props.isEdit ? "??????" : "??????"}</S.RegisBtn>
          </S.BtnWrapper>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
}

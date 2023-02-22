import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IKakaoMapViewProps {
  lat?: number;
  lng?: number;
}
export default function KakaoMapView(props: IKakaoMapViewProps) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7ec87cf57445b04e09f25391ef927a0c&libraries=services"; // 카카오맵이 로드되면 실행
    document.head.appendChild(script); // header에 script를 자식으로 추가한다.

    script.onload = () => {
      // script가 로드되면 실행
      window.kakao.maps.load(function () {
        console.log(props?.lat, props?.lng);
        // map이 만들어진 이후에 실행
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(props?.lat, props?.lng), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴 : 담아도 되고 안 담아도 된다.
        map.setCursor("move");
        // map.setCursor('url(/cursor.ico), default' :
        const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        const markerPosition = new window.kakao.maps.LatLng(
          props?.lat,
          props?.lng
        ); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });
        marker.setMap(map);
      });
    };
  }, [props.lat]);

  return (
    <>
      <div>
        <div id="map" style={{ width: 850, height: 400 }}></div>
      </div>
    </>
  );
}

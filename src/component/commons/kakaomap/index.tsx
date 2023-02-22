/* global kakao */
import React, { useEffect, useState, useRef, useMemo } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap(props) {
  // const { markerPositions, size } = props;
  const [kakaoMap, setKakaoMap] = useState(null);
  const [infowindow, setInfoWindow] = useState(null);
  const [kakaoMarker, setKakaoMarker] = useState(null);
  const { addressSearchResult } = props;

  const container = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7ec87cf57445b04e09f25391ef927a0c&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const center = new window.kakao.maps.LatLng(37.50802, 127.062835);
        const options = {
          center,
          level: 3,
        };

        const map = new window.kakao.maps.Map(container.current, options);

        const infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 });
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: center,
        });
        setKakaoMarker(marker);
        // setMapCenter(center);
        setInfoWindow(infowindow);
        setKakaoMap(map);

        // if (!isDynamic) {
        //   map.setDraggable(false);
        //   map.setZoomable(false);
        // }
      });
    };
  }, [container]);

  useEffect(() => {
    if (kakaoMap === null) return;
    console.log(addressSearchResult);
    const geocoder = new window.kakao.maps.services.Geocoder();

    const callback = function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        const latlng = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        const bounds = new window.kakao.maps.LatLngBounds();
        bounds.extend(latlng);
        kakaoMap.setBounds(bounds);
        kakaoMarker.setPosition(latlng);
      }
    };
    geocoder.addressSearch(addressSearchResult, callback);
  }, [kakaoMap, addressSearchResult]);

  return (
    <>
      <div
        id="container"
        style={{ width: "100%", height: "100%" }}
        ref={container}
      ></div>
    </>
  );
}

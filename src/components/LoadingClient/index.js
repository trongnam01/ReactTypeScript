import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './index.css';
import { Spin } from 'antd';

export default function LoadingClient({ isLoading }) {
  return (
    <div className={`${isLoading ? 'flex' : 'hidden'} loading-client`}>
      {/* <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} /> */}
      {/* <AiOutlineLoading3Quarters /> */}
      <Spin indicator={<AiOutlineLoading3Quarters style={{ fontSize: 48 }} spin />} />
      {/* <Spin tip="Loading" size="large">
      </Spin> */}
      <i className="fa-duotone fa-spinner-third fa-spin text-6xl"></i>
    </div>
  );
}

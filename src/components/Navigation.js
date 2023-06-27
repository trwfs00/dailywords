import React from 'react';
import { Select, Space } from 'antd';
import brandLogo from '../img/logo.svg';

const Navigation = ({ sendData }) => {
    const handleChange = (value) => {
        sendData(value);
    };

    const reload = () => {
        window.location.reload();
    };

    return (
        <div>
            <nav className='navbar'>
                <div className='brand-title'>
                    <img src={brandLogo} alt='logo' draggable="false" style={{ height: 60, marginTop: 10 }} onClick={reload}/>
                </div>
                <Space wrap>
                    <Select
                        placeholder="เลือกระดับคำศัพท์"
                        size="large"
                        style={{
                            width: 240
                        }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'basic',
                            label: 'Basic',
                        },
                        {
                            value: 'intermediate',
                            label: 'Intermediate',
                        },
                        {
                            value: 'advanced',
                            label: 'Advanced',
                        },
                    ]}
                    />
                </Space>
            </nav>
        </div>
    )
}

export default Navigation
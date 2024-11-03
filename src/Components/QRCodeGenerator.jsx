// QRCodeGenerator.js
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const QRCodeGenerator = ({ linkQR,QRicon}) => {
    const [inputText, setInputText] = useState({linkQR });

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            {inputText && (
                <>
                    <QRCodeCanvas
                        value={inputText}
                        size={100}
                        level="H" // High error correction level
                        includeMargin={true}
                    />
                    <FontAwesomeIcon
                        icon={QRicon}
                        style={{
                            position: 'absolute',
                            background: '#FFFFFF',
                            borderRadius: '2px',
                            padding: "2px",
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '30px',
                            color: "#000000"
                        }}
                    />
                </>
            )}
        </div>
    );
};

export default QRCodeGenerator;

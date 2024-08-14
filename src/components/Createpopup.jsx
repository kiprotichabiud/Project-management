import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Createpopup({isOpen, onClose}) {
  return (
    <div className=''>
      <Popup open={isOpen} onClose={onClose} modal>
            <div className="bg-gray-200 rounded-lg shadow-xl p-6" style={{ width: '600px' }}>
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Create popup</h2>
            </div>
        </Popup>
    <div className='bg-slate-400'>
      <h1></h1>
    </div>
    </div>
  )
}

export default Createpopup
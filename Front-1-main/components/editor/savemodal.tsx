import React, { useRef, useEffect, ReactNode  } from 'react';

interface ModalProps {
 isOpen: boolean;
 onClose: () => void;
 children: ReactNode;
}

const Savemodal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
 const dialogRef = useRef<HTMLDialogElement>(null);

 useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
 }, [isOpen]);

 return (
    <dialog ref={dialogRef} className="modal">
      {children}
      
    </dialog>
 );
};

export default Savemodal;

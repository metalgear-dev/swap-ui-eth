import { TfiClose } from 'react-icons/tfi';

interface Props {
  open: boolean;
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ title, open, onClose, children }: Props) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center ${
        open ? '' : 'pointer-events-none'
      }`}
    >
      {/* backdrop */}
      <div
        className={`fixed inset-0 bg-neutral-900 ${
          open ? 'opacity-90' : 'pointer-events-none opacity-0'
        } transition-opacity duration-300 ease-in-out`}
        onClick={onClose}
      />

      {/* content */}
      <div
        className={`bg-sky-900 shadow-lg w-[300px] max-w-screen-sm mx-auto p-4 rounded-2xl relative ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        } transition-opacity duration-300 ease-in-out`}
      >
        <button onClick={onClose} className="absolute right-4 text-sm">
          <TfiClose />
        </button>
        <div className="title px-2 mb-4">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

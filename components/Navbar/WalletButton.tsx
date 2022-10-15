import { GlyphWallet } from '../../assets/GlyphWallet';

interface Props {
  caption: string;
  handler: () => void;
}

export const WalletButton: React.FC<Props> = ({ caption, handler }: Props) => (
  <button
    className="rounded-2xl bg-gray-600 px-3 py-1 hover:bg-gray-400 flex justify-center items-center"
    onClick={handler}
  >
    <GlyphWallet />
    <>{caption}</>
  </button>
);

Import { render, screen, fireEvent } from "@testing-library/react";
import CreateToken from "../pages/create-token";

describe("CreateToken page", () => {
  it("shows error if minting fails", async () => {
    render(<CreateToken />);
    fireEvent.click(screen.getByText("Mint Token"));
    const alert = await screen.findByText(/Error:/);
    expect(alert).toBeInTheDocument();
  });


export const useMintStatus = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(‘idle’);
  const [txUrl, setTxUrl] = useState('');

  const startMint = async () => {
    setStatus('loading');
    try {
      const txSig = await mintToken();
      const solscanLink = `https://solscan.io/tx/${txSig}`;
      setTxUrl(solscanLink);
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return { status, txUrl, startMint };
};
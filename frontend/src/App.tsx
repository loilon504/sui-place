import { useState } from 'react'
import './App.css'
import { CompactPicker } from "react-color"
import { ethos, EthosConnectStatus, SignInButton } from 'ethos-connect'
import PlaceBoard from './components/PlaceBoard'

function App() {
  const [color, set_color] = useState('#000000')
  const { status, wallet } = ethos.useWallet()

  console.log(wallet?.contents)
  if (status == EthosConnectStatus.Connected) {
    return (
      <div style={{display: "flex", justifyContent: "center", marginTop: "4rem"}}>
        <PlaceBoard color={color} />
        <div style={{
          margin: "4rem", width: "512px", lineHeight: "2rem", display: "flex",
          flexDirection: "column", justifyContent: "center"
        }}>
          <h1>Sui Place</h1>
          <p style={{marginTop: "4rem", marginBottom: "4rem"}}>
            Are you ready to join the Sui community in placing a tile on the board ? Select a color
            then ctrl+click (win) or cmd+click (mac) to place.
          </p>
          <div style={{marginBottom: "4rem"}}>
            <CompactPicker color={color} onChangeComplete={new_color => set_color(new_color.hex)} />
          </div>
        </div>
      </div>
    )
  } else if (status == EthosConnectStatus.Loading) {
    return <div style={{display: "flex", justifyContent: "center"}}>
      <h1 style={{marginTop: "16rem"}}>Loading Wallet...</h1>
    </div>
  } else {
    return <div style={{display: "flex", justifyContent: "center"}}>
      <SignInButton></SignInButton>
    </div>
  }
}

export default App

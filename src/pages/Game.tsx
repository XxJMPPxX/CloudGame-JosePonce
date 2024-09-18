import {Unity, useUnityContext} from "react-unity-webgl";

function Game() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game.loader.js",
        dataUrl: "/Game.data.unityweb",
        frameworkUrl: "/Game.framework.js.unityweb",
        codeUrl: "/Game.wasm.unityweb",
    });

    function handleClickResetGame() {
        sendMessage("GameManager", "ResetGame");
    }
    


    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                    <div className="centered-content">
                        <button onClick={handleClickResetGame}>Reset</button>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Game
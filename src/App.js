import './App.css';
import React, {useState} from 'react';
import level from './assets/scripts/level';

function App() {
    const [currentScene, setCurrentScene] = useState('start');

    const nextScene = (sceneName) => {
        setCurrentScene(sceneName);
    }

    if (currentScene == "end") {
        return (
        <div style={{position: "absolute", top: "50%", width: "100%", transform: "translateY(-50%)", textAlign: "center", fontSize: "72pt", fontWeight: "bolder"}}>
            Game Over<br/>
            <button onClick={() => {nextScene("start")}}>Start Over?</button>
        </div>)
    }

    let scene = level[currentScene];
    let image = scene.storyImage;
    let imageBox = <div>
        <img style={{width: "800px", height: "500px", objectFit: "contain"}} src={`${process.env.PUBLIC_URL}/images/${image}`} />
    </div>
    let text = scene.storyText;
    let textBox = (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid black", backgroundColor: "gray", color: "white", height: "200px", width: "800px", margin: "auto"}}>
        <div>{text}</div>
    </div>
    );
    let buttonBank = <>
        {scene.choices.map((choice) => {
            return <div><button type="button" onClick={() => {nextScene(choice.nextScene)}}>{choice.choiceText}</button></div>
        })}
    </>;

    return (
        <div className="App">
            <h1>Hillary Clinton Text Adventure</h1>
            {imageBox}
            {textBox}
            <h3>Choices:</h3>
            {buttonBank}
        </div>
    );
}

export default App;
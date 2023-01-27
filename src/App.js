import './App.css';
import SearchInput from "./components/SearchInput";
import {useEffect, useState} from "react";
import emojiList from './data/emojiList.json'
import EmojiRow from "./components/EmojiRow";
import Form from 'react-bootstrap/Form';

function App() {

    const [text, setText] = useState();
    const [matchingEmojis, setMatchingEmojis] = useState([]);

    useEffect(() => {
        console.log(text)
        if(text) {
            // iterate on emojis and find matching emojis by keywords
            const results = emojiList.filter((emoji) =>
                emoji.keywords.toLowerCase().includes(text.toLowerCase())
            );
            setMatchingEmojis(results)
        }
        else {
            // get first 100 emojis
            // const emojis = emojiList.slice(0, 100);
            setMatchingEmojis(emojiList)
        }
    },[text])

    const handleInput = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <SearchInput handleInput={handleInput} />
                {
                    !matchingEmojis.length ?
                        <Form.Text id="passwordHelpBlock" muted>
                            Unable to find emojis :(
                        </Form.Text>
                        :
                        <small className="text-success">
                            Found {matchingEmojis.length} emojis
                        </small>
                }
                <div className="emoji-list scrollbar-near-moon mt-4">
                    {matchingEmojis.map((emoji, index) => (
                        <EmojiRow
                            key={index}
                            symbol={emoji.symbol}
                            title={emoji.title}
                        />
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;

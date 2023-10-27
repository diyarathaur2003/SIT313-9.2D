
import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import './post.css';
import 'codemirror/mode/javascript/javascript.js'
import { db } from './firebase'; // Import the Firestore instance from your firebase.js file
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const Post = () => {
  const [code, setCode] = useState(''); // State to store user's code
  const [question, setQuestion] = useState(''); // State to store the user's question

  const handleCodeChange = (editor, data, value) => {
    setCode(value); // Update the code when the user types
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value); // Update the question when the user types
  };

  const handlePostClick = () => {
    // Create a new document in Firestore with the user's question and code
    addDoc(collection(db, 'post'), {
      question: question,
      code: code,
    })
    .then((docRef) => {
      console.log('Question posted to Firestore with ID: ', docRef.id);
      // Optionally, you can reset the question and code input fields here
      setQuestion('');
      setCode('');
    })
    .catch(error => {
      console.error('Error posting question to Firestore:', error);
    });
  };

  return (
    <div>
      <h1>Post a Code Question</h1>

      {/* Text input for the question */}
      <textarea
        placeholder="Ask your code question here..."
        rows="4"
        cols="50"
        value={question}
        onChange={handleQuestionChange}
      />

      <h2>Your Code:</h2>

      <CodeMirror
        value={code}
        onBeforeChange={handleCodeChange}
        options={{
          mode: 'javascript', // Set the language mode
          theme: 'material', // Choose a theme
          lineNumbers: true, // Show line numbers
          lineWrapping: false,
        }}
      />
      

      <button onClick={handlePostClick}>Post</button>

     
    </div>
  );
};

export default Post;



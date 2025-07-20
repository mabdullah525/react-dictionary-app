📘 Dictionary App
A sleek and modern Dictionary App built with React and Tailwind CSS that lets users search for any word and instantly get definitions, synonyms, examples, and more. It features a fully dark-themed UI with smooth design and responsive layout.

🔥 Features
🔍 Search any English word

🧠 Shows definition, part of speech, synonyms, and examples

🌐 Link to original dictionary source

🎨 Fully styled with Tailwind CSS & @apply

🌙 Clean dark mode aesthetic

⚡ Fast and lightweight interface


🚀 Technologies Used
React (Vite or CRA)

Tailwind CSS

Free Dictionary API – https://api.dictionaryapi.dev

# 1. Clone the repository
git clone [https://react-dictionary-app-abdullah.netlify.app)]

# 2. Navigate into the folder
cd dictionary-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev


🧠 How It Works
User enters a word

App sends request to https://api.dictionaryapi.dev/api/v2/entries/en/<word>

Response is parsed and displayed:

Word

Part of Speech

Definition

Synonyms

Example sentence

“Read More” button opens source

🖌️ Custom Styling (Tailwind + @apply)
Reusable styles are managed inside index.css using @apply.
E.g.:

css
Copy
Edit
.word-details {
  @apply bg-gray-800 p-6 rounded-xl shadow-lg space-y-4 text-gray-200;
}
📂 Folder Structure
pgsql
Copy
Edit
src/
├── App.jsx
├── index.css
├── main.jsx
public/
├── index.html
📄 License
This project is open-source and free to use.

✨ Credits
Free Dictionary API

Icons by Heroicons (if added)

UI powered by Tailwind CSS





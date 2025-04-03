# ScanDidate

ScanDidate is a candidate search application built with React, Vite, and TypeScript that allows users (like employers) to browse potential developers on GitHub, accept or reject them, and save the most promising profiles. It leverages the GitHub API to dynamically load public developer profiles and persists saved candidates in local storage.

## Screenshots

![ScanDidate Screenshot](/public/screenshot.png)  
![image](https://github.com/user-attachments/assets/24af33ba-713d-465a-94fa-b13dbc400fd5)

## Live Demo

[View ScanDidate Live on Netlify](https://your-netlify-site.netlify.app)  
_Replace the URL above with your actual Netlify live link._

## Built With

- [React](https://reactjs.org/) – Frontend UI library  
- [Vite](https://vitejs.dev/) – Build tool for modern frontend projects  
- [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript for better code quality  
- [React Router](https://reactrouter.com/) – Client-side routing  
- [GitHub REST API](https://docs.github.com/en/rest) – Used to fetch user data  

## Features

- Loads random public GitHub users  
- Displays detailed candidate info: name, username, location, avatar, email, bio, and company  
- Accept (`+`) or reject (`-`) candidates  
- Saves accepted candidates to local storage  
- View saved candidates on a separate page  
- Persists saved candidates across sessions  
- Displays custom messages when:  
  - No more candidates are available  
  - No saved candidates have been selected yet  

## Getting Started

To run ScanDidate locally:

1. Clone the repository:

```bash
git clone https://github.com/your-username/scandidate.git
cd scandidate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Contributing

This is a personal project and not currently accepting external contributions. However, feel free to fork it and customize it for your own portfolio!

## License

This project is licensed under the [MIT License](LICENSE).

## Author

**Jimmy**  
- [GitHub](https://github.com/jimmykotter)  
- [Email](mailto:Jimmykotter@gmail.com)

**Link to Deployed Website**

[https://jimmykotterportfolio.netlify.app/](https://scandidate.netlify.app/)

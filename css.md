# index.css

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

body,
html {
  width: 100%;
  height: 100%;
}

.layout {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

.nav-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background-color: #e0e0e0;
}
```

# button.css

```css
.button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 5px;
  color: white;
}
```

# header.css

```css
.header {
  background-color: #f0f0f0;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

# footer.css

```css
.footer {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
```

# home.css

```css
.home {
  width: 100%;
  height: 100%;
}

.content {
  padding: 20px;
}

.button-container {
  margin-top: 20px;
}
```

# about.css

```css
.about {
  width: 100%;
  height: 100%;
}

.content {
  padding: 20px;
}

.button-container {
  margin-top: 20px;
}
```

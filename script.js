//your JS code here. If required.
/*  your css code here. If applicable */
#container {
    --container-width: 280px;
    --container-padding: 10px;
    --container-border-radius: 10px;
    --container-background-color: lightgrey;
    --gap: 10px;
    --notification-padding: 10px;
    --notification-border-radius: 10px;
    --notification-background-color: white;
    --notification-image-dim: 100px;
    --notification-image-border-width: 1px;
    --notification-image-border-color: black;
    --time-font-size: 12px;
    --button-font-size: 16px;
    --button-border-radius: 10px;
    --button-border-padding: 10px;
    --button-background-color: #02203c;
    --button-color: white;
}

#container {
    width: var(--container-width);
    padding: var(--container-padding);
    border-radius: var(--container-border-radius);
    background-color: var(--container-background-color);
    display: grid;
    grid-template-columns: auto;
    gap: var(--gap);
}

#container h1 {
    margin: 0;
    text-align: center;
    text-decoration: underline;
}

#notifications {
    display: grid;
    grid-template-columns: auto;
    gap: var(--gap);
}

.notification {
    padding: var(--notification-padding);
    border-radius: var(--notification-border-radius);
    background-color: var(--notification-background-color);
    display: grid;
    grid-template-areas:
        "img text"
        "img time";
}

.notification img {
    grid-area: img;
    width: var(--notification-image-dim);
    height: var(--notification-image-dim);
    border-radius: 50%;
    border: var(--notification-image-border-width) solid var(--notification-image-border-color);
}

.notification p {
    grid-area: text;
    margin: 0 0 0 var(--notification-padding);
}

.user {
    font-weight: bold;
}

.time {
    justify-self: end;
    align-self: end;
    font-style: italic;
    font-size: var(--time-font-size);
}

#container button {
    font-size: var(--button-font-size);
    border-radius: var(--button-border-radius);
    padding: var(--button-border-padding);
    background-color: var(--button-background-color);
    color: var(--button-color);
}
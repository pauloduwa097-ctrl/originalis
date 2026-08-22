document.addEventListener("DOMContentLoaded", function () {

    const style = document.createElement("style");

    style.textContent = `
        #originalis-ai-button {
            position: fixed;
            right: 22px;
            bottom: 22px;
            width: 58px;
            height: 58px;
            border: none;
            border-radius: 50%;
            background: #173f8a;
            color: white;
            font-size: 26px;
            cursor: pointer;
            box-shadow: 0 8px 25px rgba(0,0,0,0.20);
            z-index: 9998;
            transition: 0.25s;
        }

        #originalis-ai-button:hover {
            transform: scale(1.08);
        }

        #originalis-ai-window {
            position: fixed;
            right: 22px;
            bottom: 92px;
            width: 350px;
            max-width: calc(100vw - 40px);
            height: 470px;
            background: white;
            border-radius: 18px;
            box-shadow: 0 15px 50px rgba(0,0,0,0.20);
            overflow: hidden;
            display: none;
            flex-direction: column;
            z-index: 9999;
        }

        #originalis-ai-header {
            background: #173f8a;
            color: white;
            padding: 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        #originalis-ai-header strong {
            font-size: 17px;
        }

        #originalis-ai-close {
            background: transparent;
            border: none;
            color: white;
            font-size: 22px;
            cursor: pointer;
        }

        #originalis-ai-messages {
            flex: 1;
            padding: 18px;
            overflow-y: auto;
            background: #f5f7fb;
        }

        .originalis-ai-message {
            margin-bottom: 12px;
            padding: 12px 14px;
            border-radius: 12px;
            line-height: 1.5;
            font-size: 14px;
        }

        .originalis-ai-bot {
            background: white;
            color: #172033;
        }

        .originalis-ai-user {
            background: #173f8a;
            color: white;
            margin-left: 35px;
        }

        #originalis-ai-input-area {
            display: flex;
            padding: 12px;
            background: white;
            border-top: 1px solid #e5e7eb;
            gap: 8px;
        }

        #originalis-ai-input {
            flex: 1;
            border: 1px solid #d1d5db;
            border-radius: 9px;
            padding: 11px;
            outline: none;
        }

        #originalis-ai-send {
            border: none;
            border-radius: 9px;
            padding: 0 15px;
            background: #173f8a;
            color: white;
            cursor: pointer;
            font-weight: bold;
        }

        @media (max-width: 600px) {

            #originalis-ai-button {
                right: 15px;
                bottom: 15px;
            }

            #originalis-ai-window {
                right: 15px;
                bottom: 85px;
                width: calc(100vw - 30px);
                height: 450px;
            }
        }
    `;

    document.head.appendChild(style);


    const button = document.createElement("button");

    button.id = "originalis-ai-button";
    button.type = "button";
    button.innerHTML = "🤖";
    button.title = "Assistant Originalis";

    document.body.appendChild(button);


    const windowAI = document.createElement("div");

    windowAI.id = "originalis-ai-window";

    windowAI.innerHTML = `

        <div id="originalis-ai-header">

            <strong>🤖 Assistant Originalis</strong>

            <button
                id="originalis-ai-close"
                type="button"
            >
                ×
            </button>

        </div>

        <div id="originalis-ai-messages">

            <div class="originalis-ai-message originalis-ai-bot">
                Bonjour 👋<br><br>
                Je suis l'assistant Originalis.
                Comment puis-je vous aider ?
            </div>

        </div>

        <div id="originalis-ai-input-area">

            <input
                type="text"
                id="originalis-ai-input"
                placeholder="Écrivez votre question..."
            >

            <button
                id="originalis-ai-send"
                type="button"
            >
                Envoyer
            </button>

        </div>
    `;

    document.body.appendChild(windowAI);


    button.addEventListener("click", function () {

        if (windowAI.style.display === "flex") {

            windowAI.style.display = "none";

        } else {

            windowAI.style.display = "flex";

            document.getElementById(
                "originalis-ai-input"
            ).focus();

        }

    });


    document.getElementById(
        "originalis-ai-close"
    ).addEventListener("click", function () {

        windowAI.style.display = "none";

    });


    function envoyerMessage() {

        const input = document.getElementById(
            "originalis-ai-input"
        );

        const messages = document.getElementById(
            "originalis-ai-messages"
        );

        const question = input.value.trim();

        if (!question) {
            return;
        }


        const messageUtilisateur =
            document.createElement("div");

        messageUtilisateur.className =
            "originalis-ai-message originalis-ai-user";

        messageUtilisateur.textContent =
            question;

        messages.appendChild(
            messageUtilisateur
        );


        input.value = "";


        const messageBot =
            document.createElement("div");

        messageBot.className =
            "originalis-ai-message originalis-ai-bot";

        messageBot.textContent =
            "🤖 Je suis actuellement en mode démonstration. La connexion à l'intelligence artificielle sera ajoutée prochainement.";

        messages.appendChild(
            messageBot
        );


        messages.scrollTop =
            messages.scrollHeight;

    }


    document.getElementById(
        "originalis-ai-send"
    ).addEventListener(
        "click",
        envoyerMessage
    );


    document.getElementById(
        "originalis-ai-input"
    ).addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                envoyerMessage();

            }

        }
    );

});

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const joinTeamBtn = document.getElementById('joinTeamBtn');
    const createTeamBtn = document.getElementById('createTeamBtn');
    const jtContainer = document.getElementById('jt-container');
    const ctContainer = document.getElementById('ct-container');
    const jtClose = document.getElementById('jt-close');
    const ctClose = document.getElementById('ct-close');
    const jtJoinTeam = document.getElementById('jt-joinTeam');
    const ctGenerateCodeBtn = document.getElementById('ct-generateCodeBtn');
    const ctJoinTeamBtn = document.getElementById('ct-joinTeamBtn');
    const ctCode = document.getElementById('ct-code');
    const jtInput = document.querySelector('.jt-list-name');

    const toggleOverlay = () => {
        overlay.classList.toggle('open');
    };

    const openPopUp = (container) => {
        container.classList.add('open');
        toggleOverlay();
    };

    const closePopUp = (container) => {
        container.classList.remove('open');
        toggleOverlay();
    };

    joinTeamBtn.addEventListener('click', () => openPopUp(jtContainer));
    createTeamBtn.addEventListener('click', () => openPopUp(ctContainer));

    jtClose.addEventListener('click', () => closePopUp(jtContainer));
    ctClose.addEventListener('click', () => closePopUp(ctContainer));

    // Mock code generation function
    const generateCode = () => {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    };

    ctGenerateCodeBtn.addEventListener('click', () => {
        const code = generateCode();
        ctCode.textContent = code;
        ctJoinTeamBtn.disabled = false;
    });

    ctJoinTeamBtn.addEventListener('click', () => {
        alert('Code submitted: ' + ctCode.textContent);
    });

    jtJoinTeam.addEventListener('click', () => {
        alert('Joined team with code: ' + jtInput.value);
    });

    jtInput.addEventListener("focus", function () {
        this.style.backgroundColor = "red";  
    });

    overlay.addEventListener('click', () => {
        closePopUp(jtContainer);
        closePopUp(ctContainer);
    });
});

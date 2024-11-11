const Edit = class
{
    constructor(){
        this.edit = document.createElement("div");
        this.editLabel = document.createElement("label");
        this.editInput = document.createElement("Input");
        this.mensajeError = document.createElement("div");

        this.editLabel.textContent = " ERROR "; // Por si el label no se define correctamente.

        this.edit.appendChild(this.editInput);
        this.edit.appendChild(this.editLabel);
        this.edit.className = "EditDiv";
        this.editInput.className = "input";
        this.editLabel.className = "EditLabel";
        this._caption = " ";
        this.csstobody();

        // Añadir evento de clic al input para animar el label
        this.editInput.addEventListener('click', () => {
            this.editLabel.classList.add('floating');
        });

        // Remover la animación si el input está vacío al perder el foco
        this.editInput.addEventListener('blur', () => {
            if (this.editInput.value.trim() === "") {
                this.editLabel.classList.remove('floating');
            }
        });

        this.mensajeError.textContent = "El campo no puede estar vacío.";
        this.mensajeError.className = "error-message";
        this.mensajeError.style.display = "none";
        this.edit.appendChild(this.editInput); 
        this.edit.appendChild(this.editLabel); 
        this.edit.appendChild(this.mensajeError);

    }

    setcaption(val){
        this._caption = val
        this.editLabel.textContent = val;
    }

    addtobody() {
        document.body.appendChild(this.edit);
        return this;
    }

    csstobody(){

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'styles.css'; // Ruta del archivo CSS
        // Añadir el <link> al <head> del documento
        document.head.appendChild(link);
        console.log("CSS Added.")
    }

    clear()
    {   
        if (!this.editInput.value.trim()) {
            this.mensajeError.style.display = "block";
        }
        else{
            this.editInput.value = " ";
            this.mensajeError.style.display = "none";
        }
        return this;
    }

    hide() {
        this.edit.style.display = "none";
        return this;
    }

    show() {
        this.edit.style.display = "block";
        return this;
    }

}
// new Form(".form").init();

export default class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll("input");
    this.message = {
      loading: "Liading",
      success: "Thank you! Application accepted!",
      error: "An error occurred, please try again later",
    };
    this.path = "assets/question.php";
  }

  checkMailInputs() {
    const mailInputs = document.querySelectorAll("[type='email']");
    mailInputs.forEach((input) => {
      input.addEventListener("keypress", (e) => {
        if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
          e.preventDefault();
        }
      });
    });
  }

  cleatInputs() {
    this.inputs.forEach((item) => {
      item.value = "";
    });
  }

  initMask() {
    let setCursorPosition = (pos, el) => {
      el.focus();

      if (el.setSelectionRange) {
        el.setSelectionRange(pos, pos);
      } else if (el.createTextRange) {
        let range = elem.createTextRange();

        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    };
    function createMask(event) {
      let matrix = "+1 (___) ___-____";
      let i = 0;
      let def = matrix.replace(/\D/g, "");
      let val = this.value.replace(/\D/g, "");

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : a;
      });

      if (event.type === "blur") {
        if (this.value.length === 2) {
          this.value = "";
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }

    let inputs = document.querySelectorAll('[name="phone"]');

    inputs.forEach((input) => {
      input.addEventListener("input", createMask);
      input.addEventListener("focus", createMask);
      input.addEventListener("blur", createMask);
    });
  }

  async postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  }

  init() {
    this.checkMailInputs();
    this.initMask();

    this.forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        let statusMessage = document.createElement("div");
        statusMessage.style.cssText = `
          margin-top: 20px;
          font-size: 24px;
          color: #9ec73d;
          `;
        form.parentNode.appendChild(statusMessage);

        statusMessage.textContent = this.message.loading;

        const formData = new FormData(form);

        this.postData(this.path, formData)
          .then((res) => {
            console.log(res);
            statusMessage.textContent = this.message.success;
            statusMessage.classList.add("animated", "fadeIn");
          })
          .catch(() => {
            statusMessage.textContent = this.message.error;
          })
          .finally(() => {
            setTimeout(() => {
              this.cleatInputs();
              statusMessage.remove();
            }, 6000);
          });
      });
    });
  }
}

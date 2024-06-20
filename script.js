document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("contact-form");

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		const formData = new FormData(form);

		// Замініть 'YOUR_FORMSPREE_ENDPOINT' на вашу унікальну Formspree URL
		fetch("https://formspree.io/f/xyzggyak", {
			method: "POST",
			body: formData,
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				if (response.ok) {
					alert(
						"Дякуємо за ваше звернення! Ми зв'яжемося з вами найближчим часом."
					);
					form.reset();
				} else {
					alert(
						"Упс! Щось пішло не так. Будь ласка, спробуйте ще раз пізніше."
					);
				}
			})
			.catch((error) => {
				alert(
					"Сталася помилка при відправці форми. Будь ласка, спробуйте ще раз пізніше."
				);
				console.error("Error:", error);
			});
	});
});

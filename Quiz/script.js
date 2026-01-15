(function() {
	function ask(promptText) {
		var r = prompt(promptText);
		if (r === null) return null;
		return r.trim();
	}
	var name = ask("Wat is je voornaam?");
	var color = ask("Wat is je favoriete kleur?");
	var pizza1 = ask("Hou je van pizza? (ja/nee)");
	var number = ask("Wat is je favoriete getal?");
	var empty = [];
	if (!name) empty.push("Naam");
	if (!color) empty.push("Kleur");
	if (!pizza1) empty.push("Pizza");
	if (!number) empty.push("Getal");
	if (empty.length > 0) {
		alert("Waarschuwing: vul alle velden in:\n- " + empty.join("\n- "));
		return;
	}
	var pizza = /^j/i.test(pizza1) ? "Ja" : (/^n/i.test(pizza1) ? "Nee" : pizza1);
	var summary = "=== Jouw profiel ===\n" +
		"Naam: " + name + "\n" +
		"Kleur: " + color + "\n" +
		"Pizza: " + pizza + "\n" +
		"Getal: " + number;

	alert(summary);
})();

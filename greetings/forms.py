from django import forms


class NameForm(forms.Form):
    name = forms.CharField(
        max_length=100,
        strip=True,
        required=True,
        label="Ваше имя",
        widget=forms.TextInput(attrs={
            "placeholder": "Например, Анна",
            "class": "name-input",
            "autocomplete": "given-name",
        }),
        error_messages={
            "required": "Пожалуйста, введите имя.",
            "max_length": "Имя не должно быть длиннее 100 символов.",
        },
    )

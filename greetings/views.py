from django.shortcuts import render, redirect
from .forms import NameForm
from .models import UserName


def home(request):
    greeting = request.session.pop("greeting", None)

    if request.method == "POST":
        form = NameForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data["name"]
            UserName.objects.create(name=name)
            request.session["greeting"] = name
            return redirect("home")
    else:
        form = NameForm()

    return render(request, "greetings/home.html", {
        "form": form,
        "greeting": greeting,
    })

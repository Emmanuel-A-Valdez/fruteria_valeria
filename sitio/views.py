from django.shortcuts import redirect, render

from .models import Contacto


def index(request):
    if request.method == "POST":
        contact = Contacto()
        nombre = request.POST.get("nombre")
        telefono = request.POST.get("telefono")
        email = request.POST.get("email")
        asunto = request.POST.get("asunto")
        mensaje = request.POST.get("mensaje")

        contact.nombre = nombre
        contact.telefono = telefono
        contact.email = email
        contact.asunto = asunto
        contact.mensaje = mensaje

        context = {}

        contact.save()

        return render(request, "pages/index.html", context)
    else:
        return render(request, "pages/index.html", {})

from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

# Create your views here.
def homepage(request):
    logout(request)
    messages.success(request, "You are now logged out. Please login to access the menu")
    return render(request, "ResturantBackend/index.html")

def register(request):
    if request.method == "POST":
        # fname = request.POST.get('Fname')
        fname = request.POST['Fname']
        lname = request.POST['Lname']
        email = request.POST['email']
        phone = request.POST['phone']
        username = request.POST['usr']
        password1 = request.POST['pswrd']
        password2 = request.POST['cfrmpswrd']

        myuser = User.objects.create_user(username, email, password2)
        myuser.first_name = fname
        myuser.last_name = lname
        myuser.save()

        messages.success(request, "Your account has been successfully created")

        return redirect('my_login')
    
    return render(request, "ResturantBackend/Restaurant_Sign_Up.html")

def my_login(request):

    if request.method == "POST":
        username = request.POST['UsrName']
        password1 = request.POST['password']

        user = authenticate(username=username, password=password1)
    
        if user is not None:
            login(request, user)
            fname = user.first_name
            messages.success(request, "Successfully logged in. You may now access the menu")
            return redirect("dashboard")
        else:
            messages.error(request, "Please enter correct credentials")
            return redirect('home')


    return render(request, "ResturantBackend/Restaurant_Login.html")


def dashboard(request):
    return render(request, "ResturantBackend/Dashboard.html")


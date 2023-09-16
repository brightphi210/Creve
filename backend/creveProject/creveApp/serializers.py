
from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import *


class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['name', 'email', 'username',
                  'password', 'is_user', 'profilePic']

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = Account(**validated_data)
        user.set_password(password)
        user.save()
        return user


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token["username"] = user.username
        token["profilePic"] = user.profilePic.url if user.profilePic else None

        return token


class CreativeAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'name', 'email', 'username',
                  'password', 'is_creative', 'profilePic']

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = Account(**validated_data)
        user.set_password(password)
        user.save()
        return user


class CreativeProfileSerializer(serializers.ModelSerializer):
    account = CreativeAccountSerializer(read_only=True)

    class Meta:
        model = CreativeAccount
        fields = "__all__"
        depth = 1

        # def update(self, instance, validated_data):
        #     try:
        #         user_data = validated_data.pop('user')
        #         user = instance.user

        #         instance.profileImage = validated_data.get(
        #             'image', instance.image)

        #         instance.bio = validated_data.get('bio', instance.bio)
        #         instance.accountNumber = validated_data.get(
        #             'accountNumber', instance.accountNumber)

        #         instance.accountName = validated_data.get(
        #             'accountName', instance.accountName)

        #         instance.bankName = validated_data.get(
        #             'bankName', instance.bankName)

        #         instance.save()

        #         user.name = user_data.get('name', user.name)
        #         user.username = user_data.get('username', user.username)
        #         user.email = user_data.get('email', user.email)
        #         user.password = user_data.get('password', user.password)
        #         user.save()
        #     except:
        #         return super().update(instance, validated_data)

        #     return instance


class WebMobileSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = WebMobile


class FurnitureSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Funitures


class CobblersSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Cobbling


class FashionSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Fashion


class ProductSerializer(serializers.ModelSerializer):
    # creator = CreativeAccountSerializer()
    # creatorProfile = CreativeProfileSerializer()
    # creator = serializers.ReadOnlyField(source='creator.username')
    # webAndMobile = WebMobileSerializer()
    # funitures = FurnitureSerializer()
    # cobbling = CobblersSerializer()
    # fashion = FashionSerializer()

    class Meta:
        fields = [
            "id",

            'creator',

            'creatorProfile',


            'name',
            'price',
            'description',
            'image',
            'image2',


            'webAndMobile',
            'funitures',
            'cobbling',
            'fashion'
        ]
        model = Product
        depth = 1

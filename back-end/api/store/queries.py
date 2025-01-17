from graphene import relay
from graphene_django.filter import DjangoFilterConnectionField
import graphene
from graphql_jwt.decorators import login_required, user_passes_test
from graphql_relay.node.node import from_global_id

from apps.store.models import Products , Category , Variation
from .types import ProductType , VariationType , CategoryType
from .filters import ProductFilter , CategoryFilter

class storeQuery(graphene.ObjectType):
    product_list = DjangoFilterConnectionField(ProductType, filterset_class=ProductFilter)
    category_list=DjangoFilterConnectionField(CategoryType , filterset_class=CategoryFilter)
    variation_list=graphene.List(
        VariationType,
    )
    product_details = relay.Node.Field(ProductType)
    category_details=graphene.Field(CategoryType , name = graphene.String())
    variation_details=relay.Node.Field(VariationType)

    def resolve_product_list(self, info, **kwargs):
        return Products.objects.filter(is_available=True)

    def resolve_variation_list(self , info , **kwargs):

        return Variation.objects.filter(is_active=True)
    def resolve_category_list(self , info , **kwargs):
        return Category.objects.all()
    def resolve_category_details(self , info , **kwargs):

        name = kwargs["name"]
        category = Category.objects.filter(category_name=name).exists()
        if category:
            return Category.objects.get(category_name=name)
        return None




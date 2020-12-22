from rest_framework import permissions
from .serializers import LoadSerializer
from rest_framework.generics import ListCreateAPIView


class LeadView(ListCreateAPIView):
    serializer_class = LoadSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        print(serializer)
        serializer.save(owner=self.request.user)


# class LeadView(APIView):
#
#    def get(self,request):
#        leads = request.user.leads.all()
#        serializer = LoadSerializer(leads,many=True)
#        return Response(serializer.data,status=status.HTTP_200_OK)
#
#    def post(self,request):
#        serializer = LoadSerializer(data=request.data)
#        if serializer.is_valid():
#            serializer.save()
#            return Response(serializer.data,status=status.HTTP_201_CREATED)
#        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#


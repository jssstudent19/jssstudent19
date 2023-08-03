#include<stdio.h>

#include<stdlib.h>



void main()

{

  int graph[40][40],v,n,q[40],f=0,r=-1,i,j,cnt=0;

  printf("enter no. of vertices\n");

  scanf("%d",&n);

  printf("enter adjacency matrix\n");

  for(i=0;i<n;i++)

    for(j=0;j<n;j++)

     scanf("%d",&graph[i][j]);

     

  int*indegree=(int*)malloc(n*sizeof(int));

  for(i=0;i<n;i++)

    for(j=0;j<n;j++)

      if(graph[i][j])

        indegree[i]++;

  for(i=0;i<n;i++)

    for(j=0;j<n;j++)

      if(!indegree[i])

       q[++r]=i;

  int*topo=(int*)malloc(n*sizeof(int));

  

  while(f<=r)

  {

    v=q[f++];

    topo[++cnt]=v;

    for(j=0;j<n;j++)

    {

      if(graph[v][j])

      {

        graph[v][j]=0;

        indegree[j]--;

        if(!indegree[j])

        q[++r]=j;

      }

    }

  }

  if(cnt!=n)

  {

    printf("topological order not possible\n");

  }

  else

  {

    printf("topological order is:\n");

    for(i=0;i<=cnt;i++)

    {

      printf("%d\t",topo[i]);

    }

  }

}

       

        

      

  

      

  

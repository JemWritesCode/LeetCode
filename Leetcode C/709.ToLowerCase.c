char* toLowerCase(char* str) {
    int i = 0;
    while(str[i]){
        if(str[i] >= 'A' && str[i] <= 'Z')
            str[i] += 32;
        i++;
    }
    return(str);
}

//For Testing
#include <stdio.h>
int main(void){
	char str1[] = "HelloWORLD";
	char str2[] = "HELLOWORLD";
	char str3[] = "hElLoWoRlD";
	printf("%s\n", toLowerCase(str1));
	printf("%s\n", toLowerCase(str2));
	printf("%s\n", toLowerCase(str3));
	return(0);
}
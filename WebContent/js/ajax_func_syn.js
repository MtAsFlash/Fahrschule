//����ajax xmlHttp������
var xmlHttp= false;

function send_synrequest(method,url,content,responseType,callback)
{
	xmlHttp=false;
	//��ʼ��XMLHttpRequest����
	if (window.XMLHttpRequest)   //Mozilla�����
	{
		xmlHttp = new XMLHttpRequest();
		if(xmlHttp.overrideMimeType)
		{
			xmlHttp.overrideMimeType("text/xml");
		}
	}
	else if(window.ActiveXObject)     //IE�����
	{
		try
		{
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e)
		{
			try
			{
				xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e) {}
		}
	}
	
	if(!xmlHttp)   //�쳣����������ʵ��ʧ��
	{
		window.alert("���ܴ���XMLHttpRequest����ʵ��.");
		return false;
	}
	
	if(responseType.toLowerCase()=="text")
	{
		xmlHttp.onreadystatechange= callback;
	}
	else if(responseType.toLowerCase()=="xml")
	{
		xmlHttp.onreadystatechange= callback;
	}
	else
	{
		window.alert("��Ӧ����������");
		return false;
	}
	//ȷ����������ķ�ʽ��URL�Լ��Ƿ�ͬ��ִ���¶δ���
	if(method.toLowerCase()=="get")
	{
		xmlHttp.open(method,url,false);
	}
	else if(method.toLowerCase()=="post")
	{
		xmlHttp.open(method,url,false);
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	}
	else
	{
		window.alert("http��������������");
		return false;
	}
	xmlHttp.send(content);
}

//��ȡ������=����ֵ���ַ���
function PropertyValue(name) {
	var temp = document.getElementById(name).value;
	return temp ;
}
    
    

    
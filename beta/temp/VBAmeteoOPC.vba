'проверка на файл
If (Dir("X:\", vbDirectory) <> "") Then
	'IF FILE EXIST
	On Error Resume Next
	Open "X:\portopcdata.ini" For Output As #1
	
	'METEO
	On Error Resume Next
	Print #1, "meteo_temperature_air = " & ReadValue("Fix32.REZPARK.TEMPVOZD.F_CV", 1)
	On Error Resume Next
	Print #1, "meteo_windforce_nb = " & ReadValue("Fix32.REZPARK.WINFORCE.F_CV", 1)
	On Error Resume Next
	Print #1, "meteo_windforce_p = " & ReadValue("Fix32.PRICHAL.WINDFORCE.F_CV", 1)
	
	Print #1, "fixtime = " & Now()
	
	Close #1
Else
	Debug.Print "directory not found"
End If
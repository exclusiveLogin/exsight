	'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        'IF FILE EXIST
		On Error Resume Next
        Open "X:\portopcdata.ini" For Output As #1
        On Error Resume Next
        Print #1, "tank_templab = " & ReadValue("Fix32.REZPARK.LABTE" & tanknum & ".F_CV", 1)
        On Error Resume Next
        Print #1, "tank_plotlab = " & ReadValue("Fix32.REZPARK.LABPL" & tanknum & ".F_CV", 1)
        On Error Resume Next
        Print #1, "tank_temp = " & ReadValue("Fix32.REZPARK.TE" & tanknum & ".F_CV", 1)
        On Error Resume Next
        Print #1, "tank_mass = " & ReadValue("Fix32.REZPARK.MA" & tanknum & ".F_CV", 1)
        On Error Resume Next
        Print #1, "tank_plot = " & ReadValue("Fix32.REZPARK.PL" & tanknum & ".F_CV", 1)
        On Error Resume Next
        Print #1, "tank_vaportemp = " & ReadValue("Fix32.REZPARK.TEOS" & tanknum & ".F_CV", 1)
        On Error Resume Next
        Print #1, "tank_level = " & ReadValue("Fix32.REZPARK.TV" & tanknum & ".F_CV", 1)
        On Error Resume Next
        Print #1, "tank_volume = " & ReadValue("Fix32.REZPARK.VL" & tanknum & ".F_CV", 1)
        On Error Resume Next
        Print #1, "tank_maxlevel = " & ReadValue("Fix32.REZPARK.TV" & tanknum & ".F_HIHI", 1)
        On Error Resume Next
        Print #1, "tank_avlevel = " & ReadValue("Fix32.REZPARK.TV" & tanknum & ".F_EHI", 1)
        On Error Resume Next
        Print #1, "tank_signallevel = " & ReadValue("Fix32.REZPARK.TV" & tanknum & ".F_HI", 1)
        On Error Resume Next
        Print #1, "tank_pereliv = " & ReadValue("Fix32.REZPARK.PERELIV" & tanknum & ".F_CV", 1)
        On Error Resume Next
        Print #1, "tank_product = " & ReadValue("Fix32.REZPARK.PROD" & tanknum & ".F_CV", 1)
        Print #1, "fixtime = " & Now()
        
        Close #1
    Else
        Debug.Print "directory not found"
    End If
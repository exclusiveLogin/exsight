VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
END
Attribute VB_Name = "exsight"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = True
Private Sub ecu1_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        'IF FILE EXIST
        On Error Resume Next
        Open "X:\portecu1.ini" For Output As #1
        
        'ECU1
        On Error Resume Next
        Print #1, "port_ecu1_l1 = " & ReadValue("Fix32.PRICHAL.ESU1L1", 1)
        On Error Resume Next
        Print #1, "port_ecu1_l2 = " & ReadValue("Fix32.PRICHAL.ESU1L2", 1)
        On Error Resume Next
        Print #1, "port_ecu1_l3 = " & ReadValue("Fix32.PRICHAL.ESU1L3", 1)
        On Error Resume Next
        Print #1, "port_ecu1_l4 = " & ReadValue("Fix32.PRICHAL.ESU1L4", 1)
        On Error Resume Next
        Print #1, "port_ecu1_l5 = " & ReadValue("Fix32.PRICHAL.ESU1L5", 1)
        On Error Resume Next
        Print #1, "port_ecu1_l6 = " & ReadValue("Fix32.PRICHAL.ESU1L6", 1)
        
        Print #1, "fixtime = " & Now()
        
        Close #1
    Else
        Debug.Print "directory not found"
    End If
End Sub

Private Sub ecu2_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        'IF FILE EXIST
        On Error Resume Next
        Open "X:\portecu2.ini" For Output As #1
        
        'ECU2
        On Error Resume Next
        Print #1, "port_ecu2_l1 = " & ReadValue("Fix32.PRICHAL.ESU2L1", 1)
        On Error Resume Next
        Print #1, "port_ecu2_l2 = " & ReadValue("Fix32.PRICHAL.ESU2L2", 1)
        On Error Resume Next
        Print #1, "port_ecu2_l3 = " & ReadValue("Fix32.PRICHAL.ESU2L3", 1)
        On Error Resume Next
        Print #1, "port_ecu2_l4 = " & ReadValue("Fix32.PRICHAL.ESU2L4", 1)
        On Error Resume Next
        Print #1, "port_ecu2_l5 = " & ReadValue("Fix32.PRICHAL.ESU2L5", 1)
        On Error Resume Next
        Print #1, "port_ecu2_l6 = " & ReadValue("Fix32.PRICHAL.ESU2L6", 1)
        
        Print #1, "fixtime = " & Now()
        
        Close #1
    Else
        Debug.Print "directory not found"
    End If
End Sub

Private Sub gas_rp_OnTimeOut(ByVal lTimerId As Long)
    'checking file
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim startstep As Integer
        Dim endstep As Integer
        
        startstep = 187
        endstep = 200
        
        'open file on write output
        Open "X:\upes_rp.ini" For Output As #1
        
        'start loop read sensors
        For i = startstep To endstep
        
            'catch error read
            On Error GoTo readerror
            'if all ok write data in file
            Print #1, "SGO_" & i & " = " & ReadValue("Fix32.UPES.SGO" & i & ".F_CV", 1)
            GoTo tonext
            
readerror:
            'if error write error flag on sensor value
            Print #1, "SGO_" & i & " = -1000"
tonext:
        
        Next i
        
        Print #1, "fixtime = " & Now()
        Close #1
        
    Else
        Debug.Print "directory not found"
    End If
End Sub

Private Sub meteo_OnTimeOut(ByVal lTimerId As Long)
    'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        'IF FILE EXIST
        On Error Resume Next
        Open "X:\meteodata.ini" For Output As #1
        
        'METEO
        On Error Resume Next
        Print #1, "meteo_temperature_air = " & ReadValue("Fix32.REZPARK.TEMPVOZD.F_CV", 1)
        On Error Resume Next
        Print #1, "meteo_windforce_nb = " & ReadValue("Fix32.REZPARK.WINDFORCE.F_CV", 1)
        On Error Resume Next
        Print #1, "meteo_windforce_p = " & ReadValue("Fix32.PRICHAL.WINDFORCE.F_CV", 1)
        On Error Resume Next
        Print #1, "meteo_winddirection_p = " & ReadValue("Fix32.PRICHAL.WINDSIDE.F_CV", 1)
        
        Print #1, "fixtime = " & Now()
        
        Close #1
    Else
        Debug.Print "directory not found"
    End If
End Sub

Private Sub port1_OnTimeOut(ByVal lTimerId As Long)
    'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        'IF FILE EXIST
        On Error Resume Next
        Open "X:\portopcdata1.ini" For Output As #1
        
        'PLOTNOMER
        On Error Resume Next
        Print #1, "port_plotnomer_t1 = " & ReadValue("Fix32.PRICHAL.T1.F_CV", 1)
        On Error Resume Next
        Print #1, "port_plotnomer_p1 = " & ReadValue("Fix32.PRICHAL.P1.F_CV", 1)
        
        On Error Resume Next
        Print #1, "port_plotnomer_p11 = " & ReadValue("Fix32.PRICHAL.P11.F_CV", 1)
        On Error Resume Next
        Print #1, "port_plotnomer_p12 = " & ReadValue("Fix32.PRICHAL.P12.F_CV", 1)
        
        On Error Resume Next
        Print #1, "port_plotnomer_t11 = " & ReadValue("Fix32.PRICHAL.T11.F_CV", 1)
        On Error Resume Next
        Print #1, "port_plotnomer_t12 = " & ReadValue("Fix32.PRICHAL.T12.F_CV", 1)
        
        On Error Resume Next
        Print #1, "port_plotnomer_f11 = " & ReadValue("Fix32.PRICHAL.F11.F_CV", 1)
        On Error Resume Next
        Print #1, "port_plotnomer_f12 = " & ReadValue("Fix32.PRICHAL.F12.F_CV", 1)
        
        On Error Resume Next
        Print #1, "port_plotnomer_m11 = " & ReadValue("Fix32.PRICHAL.M11.A_CV", 1)
        On Error Resume Next
        Print #1, "port_plotnomer_m12 = " & ReadValue("Fix32.PRICHAL.M12.A_CV", 1)
        
        On Error Resume Next
        Print #1, "port_plotnomer_ms11 = " & ReadValue("Fix32.PRICHAL.MS11.A_CV", 1)
        On Error Resume Next
        Print #1, "port_plotnomer_ms12 = " & ReadValue("Fix32.PRICHAL.MS12.A_CV", 1)
        
        Print #1, "fixtime = " & Now()
        
        Close #1
    Else
        Debug.Print "directory not found"
    End If
End Sub

Private Sub port2_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        'IF FILE EXIST
        On Error Resume Next
        Open "X:\portopcdata2.ini" For Output As #1
        
        'PLOTNOMER
        On Error Resume Next
        Print #1, "port_plotnomer_t2 = " & ReadValue("Fix32.PRICHAL.T2.F_CV", 1)
        On Error Resume Next
        Print #1, "port_plotnomer_p2 = " & ReadValue("Fix32.PRICHAL.P2.F_CV", 1)
        
        On Error Resume Next
        Print #1, "port_plotnomer_p21 = " & ReadValue("Fix32.PRICHAL.P21.F_CV", 1)
        On Error Resume Next
        Print #1, "port_plotnomer_p22 = " & ReadValue("Fix32.PRICHAL.P22.F_CV", 1)
        
        On Error Resume Next
        Print #1, "port_plotnomer_t21 = " & ReadValue("Fix32.PRICHAL.T21.F_CV", 1)
        On Error Resume Next
        Print #1, "port_plotnomer_t22 = " & ReadValue("Fix32.PRICHAL.T22.F_CV", 1)
        
        On Error Resume Next
        Print #1, "port_plotnomer_f21 = " & ReadValue("Fix32.PRICHAL.F21.F_CV", 1)
        On Error Resume Next
        Print #1, "port_plotnomer_f22 = " & ReadValue("Fix32.PRICHAL.F22.F_CV", 1)
        
        On Error Resume Next
        Print #1, "port_plotnomer_m21 = " & ReadValue("Fix32.PRICHAL.M21.A_CV", 1)
        On Error Resume Next
        Print #1, "port_plotnomer_m22 = " & ReadValue("Fix32.PRICHAL.M22.A_CV", 1)
        
        On Error Resume Next
        Print #1, "port_plotnomer_ms21 = " & ReadValue("Fix32.PRICHAL.MS21.A_CV", 1)
        On Error Resume Next
        Print #1, "port_plotnomer_ms22 = " & ReadValue("Fix32.PRICHAL.MS22.A_CV", 1)
        
        Print #1, "fixtime = " & Now()
        
        Close #1
    Else
        Debug.Print "directory not found"
    End If
End Sub

Private Sub portselect_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        'IF FILE EXIST
        On Error Resume Next
        Open "X:\portselect.ini" For Output As #1
        
        'USER
        On Error Resume Next
        Print #1, "numbrezsmt = " & ReadValue("Fix32.PRICHAL.TSSMT", 1)
        On Error Resume Next
        Print #1, "numbrezoil = " & ReadValue("Fix32.PRICHAL.TSOIL", 1)
        On Error Resume Next
        Print #1, "numbrezdt = " & ReadValue("Fix32.PRICHAL.TSDT", 1)
        
        Print #1, "fixtime = " & Now()
        
        Close #1
    Else
        Debug.Print "directory not found"
    End If
End Sub

Private Sub portvalve_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        'IF FILE EXIST
        On Error Resume Next
        Open "X:\portvalve.ini" For Output As #1
        
        'ZADV
        On Error Resume Next
        Print #1, "port_zadvsmt1 = " & ReadValue("Fix32.PRICHAL.ZADVSMT1", 1)
        On Error Resume Next
        Print #1, "port_zadvsmt2 = " & ReadValue("Fix32.PRICHAL.ZADVSMT2", 1)
        On Error Resume Next
        Print #1, "port_zadvoil1 = " & ReadValue("Fix32.PRICHAL.ZADVOIL1", 1)
        On Error Resume Next
        Print #1, "port_zadvoil2 = " & ReadValue("Fix32.PRICHAL.ZADVOIL2", 1)
        On Error Resume Next
        Print #1, "port_zadvdt1 = " & ReadValue("Fix32.PRICHAL.ZADVDT1", 1)
        On Error Resume Next
        Print #1, "port_zadvdt2 = " & ReadValue("Fix32.PRICHAL.ZADVDT2", 1)
        
        Print #1, "fixtime = " & Now()
        
        Close #1
    Else
        Debug.Print "directory not found"
    End If
End Sub

Private Sub tank1_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 1
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank10_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 10
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank11_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 11
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank12_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 12
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank13_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 13
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank14_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 14
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank15_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 15
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank16_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 16
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank17_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 17
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank18_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 18
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank19_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 19
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank2_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 2
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank20_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 20
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank3_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 3
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank4_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 4
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank5_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 5
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank51_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 51
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank52_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 52
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank53_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 53
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank54_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 54
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank55_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 55
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank56_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 56
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank6_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 6
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank69_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 69
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank7_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 7
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank70_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 70
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank71_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 71
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank72_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 72
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank73_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 73
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank8_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 8
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

Private Sub tank9_OnTimeOut(ByVal lTimerId As Long)
'проверка на файл
    If (Dir("X:\", vbDirectory) <> "") Then
        Debug.Print "All OK"
        'IF FILE EXIST
        Dim tanknum As Integer
        tanknum = 9
        
        Open "X:\data_tank" & tanknum & ".ini" For Output As #1
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
End Sub

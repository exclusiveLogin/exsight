'проверка на файл
If (Dir("X:\", vbDirectory) <> "") Then
	'IF FILE EXIST
	On Error Resume Next
	Open "X:\portopcdata.ini" For Output As #1
	
	'PLOTNOMER
	On Error Resume Next
	Print #1, "port_plotnomer_t1 = " & ReadValue("Fix32.PRICHAL.T1.F_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_t2 = " & ReadValue("Fix32.PRICHAL.T2.F_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_p1 = " & ReadValue("Fix32.PRICHAL.P1.F_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_p2 = " & ReadValue("Fix32.PRICHAL.P2.F_CV", 1)
	
	On Error Resume Next
	Print #1, "port_plotnomer_p11 = " & ReadValue("Fix32.PRICHAL.P11.F_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_p21 = " & ReadValue("Fix32.PRICHAL.P21.F_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_p12 = " & ReadValue("Fix32.PRICHAL.P12.F_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_p22 = " & ReadValue("Fix32.PRICHAL.P22.F_CV", 1)
	
	On Error Resume Next
	Print #1, "port_plotnomer_t11 = " & ReadValue("Fix32.PRICHAL.T11.F_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_t21 = " & ReadValue("Fix32.PRICHAL.T21.F_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_t12 = " & ReadValue("Fix32.PRICHAL.T12.F_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_t22 = " & ReadValue("Fix32.PRICHAL.T22.F_CV", 1)
	
	On Error Resume Next
	Print #1, "port_plotnomer_f11 = " & ReadValue("Fix32.PRICHAL.F11.F_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_f21 = " & ReadValue("Fix32.PRICHAL.F21.F_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_f12 = " & ReadValue("Fix32.PRICHAL.F12.F_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_f22 = " & ReadValue("Fix32.PRICHAL.F22.F_CV", 1)
	
	On Error Resume Next
	Print #1, "port_plotnomer_m11 = " & ReadValue("Fix32.PRICHAL.M11.A_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_m21 = " & ReadValue("Fix32.PRICHAL.M21.A_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_m12 = " & ReadValue("Fix32.PRICHAL.M12.A_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_m22 = " & ReadValue("Fix32.PRICHAL.M22.A_CV", 1)
	
	On Error Resume Next
	Print #1, "port_plotnomer_ms11 = " & ReadValue("Fix32.PRICHAL.MS11.A_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_ms21 = " & ReadValue("Fix32.PRICHAL.MS21.A_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_ms12 = " & ReadValue("Fix32.PRICHAL.MS12.A_CV", 1)
	On Error Resume Next
	Print #1, "port_plotnomer_ms22 = " & ReadValue("Fix32.PRICHAL.MS22.A_CV", 1)
	
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
	
	'USER
	On Error Resume Next
	Print #1, "port_user_numbrezsmt = " & ReadValue("Fix32.PRICHAL.User.NumbRezSMT.CurrentValue", 1)
	On Error Resume Next
	Print #1, "port_user_numbrezoil = " & ReadValue("Fix32.PRICHAL.User.NumbRezOil.CurrentValue", 1)
	On Error Resume Next
	Print #1, "port_user_numbrezdt = " & ReadValue("Fix32.PRICHAL.User.NumbRezDT.CurrentValue", 1)

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
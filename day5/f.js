const maze = `0
1
1
-2
-2
-2
-2
-4
2
0
-9
1
-5
-12
-9
-10
-7
-7
-2
-10
-2
0
-6
-14
-6
-24
-10
0
-4
1
1
-30
-31
-24
0
-20
-24
-10
-2
0
-28
-8
-3
-23
-6
2
-41
-36
-2
-11
-39
-27
-21
-48
-38
-4
-29
-49
-9
-57
-33
-60
-42
-12
-21
-19
-21
-52
-65
-62
-26
-64
-67
-12
-22
-21
-30
-31
-20
-54
-57
-20
-18
-46
-1
1
-76
-25
-80
-60
-80
-36
-30
-85
-21
-89
-62
-66
-4
-39
-64
-39
-88
-17
-5
-69
-90
-14
-2
-13
-76
1
-10
-10
-28
0
-96
-16
-33
-90
-56
-25
-9
-4
-110
-54
-72
-92
-127
-112
-38
-17
-114
-82
-35
-51
-41
-3
-14
-69
-102
-72
-6
-118
-80
-111
-96
-45
-43
-19
-37
-24
-75
-75
-115
-54
-52
-19
-123
-151
-122
-96
-20
-46
-67
-128
-123
-9
-43
-34
-160
-111
2
-164
-158
-63
-67
-2
-145
-103
-80
-53
-148
-103
-47
0
-178
-147
-57
-152
-46
-173
-119
-184
-69
-113
-112
-51
-33
-187
-172
-172
-122
-56
-59
-24
-204
-86
-65
-152
-119
-201
-75
-16
-106
-159
-152
-77
-29
-9
-39
-49
-141
-211
-23
-145
-96
-94
-84
-99
-66
-9
-135
-185
-15
-184
-123
-152
-94
-67
-43
-127
-3
-21
-11
-76
-129
-139
-65
-185
-15
-215
-163
-232
-1
-173
-81
-148
-12
1
-251
-183
-214
-162
-213
-247
-165
-232
-107
-75
-190
-205
-138
-149
-232
-99
-57
-148
-231
-188
-141
-193
-39
-208
-245
-102
-247
-1
-76
-13
-20
-263
-146
-158
-81
-270
-162
-70
-215
-286
-98
-186
-184
-147
-146
-160
-172
-42
-48
-14
-175
-299
-293
-214
-198
-128
-272
-108
-94
-102
-108
-53
2
-172
-41
-293
-14
-256
-92
-121
-140
-294
-54
-121
-221
-145
-260
-298
-82
-284
-238
-15
-159
-159
-213
-31
-44
-61
-203
-247
-39
-157
-130
-347
-272
-23
-185
-162
-337
-91
-72
-91
-315
-144
-165
-360
-173
-258
-275
-99
-81
-16
-72
-150
-238
-45
-7
-344
-364
-339
-54
-61
-24
-324
-321
-294
-104
-87
-165
-113
-4
-306
-198
-147
-136
-360
-217
-20
-391
-169
-209
-12
-95
-164
-215
-239
-87
-341
-241
-340
-343
-372
-305
-252
-398
-208
-284
-28
-11
-222
-360
-190
-9
-233
-68
-14
-220
-34
-87
-392
-84
-41
-187
-59
-247
-258
-143
-102
-208
-182
-254
-67
-182
-279
-339
-200
-445
-43
-120
-418
-273
-201
-113
-394
-4
-197
-313
-116
-62
-323
-47
-14
-24
-416
-150
-28
-288
-461
0
-388
-375
-424
-302
-4
-75
-54
-288
-212
-436
-414
-447
-362
-120
-467
-135
-93
-268
-8
-192
-342
-466
-162
-387
-348
-351
-236
-123
-51
-225
-259
-52
-14
-26
-347
-327
-206
-37
-77
-316
-278
-195
-348
-330
-235
-125
-36
-323
-10
-77
-133
-353
-109
-51
-134
-281
-227
-483
-406
-11
-356
-443
-104
-264
-90
-489
-39
-145
-318
-399
-238
-434
-145
-122
-507
-196
-156
-251
-370
-207
-534
-171
-117
-416
-226
-393
-133
-391
-347
-510
-121
-84
2
-110
-427
-456
-184
-295
-337
-444
-143
-120
-163
-351
-36
-483
-315
-240
-462
-367
-237
-277
-102
-426
-250
-240
-503
-567
-324
-555
-14
-197
-24
-371
-484
-54
-13
-432
-343
-54
-450
-374
-28
-154
-216
-314
-122
-281
-495
-351
-365
-528
-545
-429
-411
-93
-230
-170
-188
-227
-499
-562
-275
-412
-597
-64
-303
-374
-262
-359
-549
-579
-379
-143
-598
-273
-618
-449
-425
-441
-251
-135
-150
-521
-561
-460
-79
-252
-336
-27
-331
-335
-46
-555
-121
-447
-563
-617
-42
-125
-92
-472
-41
-164
-450
-372
-584
-327
-278
-307
-378
-513
-52
-55
-551
-81
-550
-472
-347
-664
-348
-150
-88
-7
-559
-475
-553
-342
-20
-411
-574
-419
-363
-176
-379
-429
-548
-649
-178
-449
-594
-536
-386
-108
-552
-179
-578
-398
-281
-3
-93
-706
-679
-623
-140
-682
-59
-710
-416
-390
-217
-679
-540
-85
-31
-403
-28
-15
-105
-388
-571
-103
-136
-404
-555
-667
-189
-460
-433
-278
-310
-300
-393
-383
-203
-632
-482
-371
-385
-265
-197
-100
-512
-668
-291
-626
-384
-40
-21
-411
-288
-187
-56
-556
-455
-114
-560
-205
-22
-442
-38
-260
-492
-276
-621
-202
-183
-5
-345
-25
-500
-633
-476
-47
-778
-726
-628
-308
-715
-705
-247
-670
-699
-136
-521
-311
-773
-333
-721
-77
-76
-197
-101
-31
-6
-701
-640
-678
-421
-778
-627
-359
-789
-463
-99
-557
-796
-12
-678
-591
-359
-711
-175
-82
-18
-347
-601
-819
0
-40
-32
-454
-680
-783
-269
-744
-726
-336
-563
-152
-782
-651
-674
-788
-311
-640
-525
-54
-317
-312
-328
-128
-162
-133
-769
-669
-611
-553
-247
-174
-217
-497
-202
-450
-486
-102
-35
-273
-436
-282
-343
-544
-602
-171
-444
-865
-206
-486
-5
-566
-444
-496
-142
-502
-9
-359
-330
-797
-735
-726
-66
-290
-716
-494
-796
-373
-519
-502
-78
-622
-602
-408
-511
-114
-330
-794
-102
-795
-882
-264
-771
-832
-729
-527
-264
-4
-12
-517
-516
-85
-899
-693
-759
-367
-844
-377
-207
-590
-551
-93
-810
-449
-464
-111
-161
-154
-823
-60
-523
-265
-219
-903
-170
-601
-785
-144
-439
-190
-275
-72
-75
-175
-137
-842
-336
-169
-245
-480
-751
-363
-610
-505
-771
-85
-337
-307
-687
-731
-118
-313
-541
-490
-485
-647
-104
-101
-324
-57
-5
-610
-251
-841
-97
-562
-664
-765
-969
-449
-172
-846
-465
-212
-600
-62
-399
-923
-62
-400
-197
-144
-699
-730
-754
-748
-405
-518
-633
-893
-675
-717
-380
-464
-193
-590
-888
-64
-111
-905
-774
-209
-492
-64
-589
-952
-59
-5
-615
-208
-131
-867
-594
-668
-253
-75
-418
-5
-394
-456
-266
-669
-335
-687
-661
-73
-446
-828
-413
-643
-410
-91
-25
-84
-335
-943
-355
-155
-778
-1013
-772
-976
-305
-575
-1060
-148
-931
-588
-204
-56
-102
-467
-937
-481
-890
-503
-379
-442
-774
-316
-732`;

var num = Int16Array.from(maze.split('\n').map(x => parseInt(x, 10)));


function part2timed(arrayNum) {
	var steps = 0;

	var i = 0;

	for (; i < arrayNum.length;) {
		var n = arrayNum[i];
		if (n >= 3) {
			arrayNum[i] = n - 1;
		} else {
			arrayNum[i] = n + 1;
		}
		i = i + n;
		steps++;
	}

	return steps;
}

console.time('part2timed');
var steps = part2timed(num);
console.timeEnd('part2timed');
console.log('steps taken ' ,steps);
import { Request } from 'express';
import { EntityManager } from 'typeorm';
import { Organisation } from '../entity/organisation';
// import { ResultType } from './type';

export async function search(
    manager: EntityManager,
    organisation: Organisation,
    params: Request['params'],
) {
return {
    'data': [{
		'id': 'b0672227-3822-4b2b-8a99-d5f8dcf4391b',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 1893362319,
			'resultType': 'antigen',
			'activateTime': '2020-08-27 09:11:35',
			'resultTime': '2020-10-06 12:54:49'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '0b4e583a-0398-41e5-b946-b86836f723db'
				}
			}
		}
	}, {
		'id': '8bf9e7db-df7d-4b1c-af9d-4f6f2ad27941',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 4920643221,
			'resultType': 'antibody',
			'activateTime': '2020-02-10 12:21:50',
			'resultTime': '2018-12-08 03:08:29'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': 'f372af18-471f-43b1-8341-684eaa5a5a65'
				}
			}
		}
	}, {
		'id': 'f505cabe-2ccc-466c-b31c-f23ee2625995',
		'type': 'sample',
		'attributes': {
			'result': 'negative',
			'barCode': 10558074220,
			'resultType': 'antigen',
			'activateTime': '2021-07-30 12:23:53',
			'resultTime': '2020-06-10 05:15:54'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '1f7d7302-20d9-49fe-92e3-b925fd878f1b'
				}
			}
		}
	}, {
		'id': 'd6dc59e9-0f1c-4772-8456-b7e8e5c2d932',
		'type': 'sample',
		'attributes': {
			'result': 'negative',
			'barCode': 2864599017,
			'resultType': 'rtpcr',
			'activateTime': '2021-12-14 08:33:00',
			'resultTime': '2017-02-08 12:58:37'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': 'ee81882f-ac37-4490-9f44-524db6df7191'
				}
			}
		}
	}, {
		'id': 'a07b1861-dd2f-4714-a742-67791c2757cb',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 4252167739,
			'resultType': 'antigen',
			'activateTime': '2020-10-29 03:29:33',
			'resultTime': '2017-11-29 12:16:27'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '96ba969e-d85b-40bc-9da4-066a0e2a3e43'
				}
			}
		}
	}, {
		'id': '7a392397-6920-4341-a537-2d16e89c79d4',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 8029045832,
			'resultType': 'rtpcr',
			'activateTime': '2021-03-27 01:30:31',
			'resultTime': '2021-09-10 02:51:35'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '9fac0d26-a2d2-45c6-97c8-cd9e376f97e2'
				}
			}
		}
	}, {
		'id': '55432c10-92a7-499c-8509-a2f8e6bd81f8',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 3313689489,
			'resultType': 'antigen',
			'activateTime': '2020-11-08 07:07:30',
			'resultTime': '2015-08-25 11:53:55'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '8610dd3f-73f2-405c-b448-bf1c1ca71bc5'
				}
			}
		}
	}, {
		'id': '32495bae-8214-4428-88e0-904f7a80a2ab',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 4074827629,
			'resultType': 'antigen',
			'activateTime': '2021-01-11 05:53:42',
			'resultTime': '2018-02-13 02:19:10'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': 'f704b375-df98-4bb6-8265-34fcdb5367c4'
				}
			}
		}
	}, {
		'id': '9d1f5281-75f6-4fb3-b8f1-f5e4fd94fbb7',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 3496276128,
			'resultType': 'antigen',
			'activateTime': '2020-06-08 02:45:03',
			'resultTime': '2016-07-03 01:55:01'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '62c220fc-bcde-4ad4-8765-06f934261573'
				}
			}
		}
	}, {
		'id': '5317f802-ef6a-459d-8b46-483539365030',
		'type': 'sample',
		'attributes': {
			'result': 'negative',
			'barCode': 8651827761,
			'resultType': 'antibody',
			'activateTime': '2020-07-22 04:08:23',
			'resultTime': '2016-12-04 07:15:13'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '92817b6a-7887-4a00-a02b-e67f33a27234'
				}
			}
		}
	}, {
		'id': '1ac72c38-bd61-4f1c-8c09-5d1bead42add',
		'type': 'sample',
		'attributes': {
			'result': 'negative',
			'barCode': 4920786203,
			'resultType': 'rtpcr',
			'activateTime': '2020-02-17 11:21:57',
			'resultTime': '2021-06-24 10:34:39'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '6b88f572-9445-4138-bb10-80771ac45683'
				}
			}
		}
	}, {
		'id': '715a93d6-62dd-4ffb-b2a9-85b5f9edb599',
		'type': 'sample',
		'attributes': {
			'result': 'negative',
			'barCode': 7879206334,
			'resultType': 'antibody',
			'activateTime': '2020-08-31 02:34:36',
			'resultTime': '2016-05-06 05:08:32'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '2f97cde8-a3bc-400d-9c71-5b7d8e4f2ca3'
				}
			}
		}
	}, {
		'id': 'a3c01ac2-edf5-45c5-b3f8-d123c63ebb58',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 5315415071,
			'resultType': 'rtpcr',
			'activateTime': '2020-05-13 06:52:56',
			'resultTime': '2021-08-04 07:33:32'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': 'ece8dbfa-d532-4a9a-9aac-0514ad35f8d4'
				}
			}
		}
	}, {
		'id': '6a29e82f-50f8-431b-9030-a75ec62eea3d',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 5657203536,
			'resultType': 'antibody',
			'activateTime': '2021-10-13 12:18:51',
			'resultTime': '2017-02-24 06:34:32'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '307c5efc-bfe3-46ce-87bf-b0c7b466d8d4'
				}
			}
		}
	}, {
		'id': '8e06ea3b-7d0b-4c9c-8a21-0f511b333a44',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 5044762390,
			'resultType': 'antibody',
			'activateTime': '2021-04-02 05:39:19',
			'resultTime': '2019-05-21 11:23:45'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': 'c34b22f8-e25c-4c01-befd-b07a76df6f28'
				}
			}
		}
	}, {
		'id': '51e38da3-41fb-45ef-958a-bb60c1175687',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 11947030383,
			'resultType': 'rtpcr',
			'activateTime': '2020-06-07 07:13:28',
			'resultTime': '2016-08-27 10:52:18'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '15c31bfa-522b-4dbd-aa69-80abc1771413'
				}
			}
		}
	}, {
		'id': '80f0010f-3f50-4653-accf-e15b3e0525e9',
		'type': 'sample',
		'attributes': {
			'result': 'negative',
			'barCode': 5876801075,
			'resultType': 'antigen',
			'activateTime': '2021-07-17 09:53:14',
			'resultTime': '2017-06-28 05:37:33'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '331023bb-f493-412a-9fca-d6e21a3dfccf'
				}
			}
		}
	}, {
		'id': '9afb977b-0dea-4d95-90e9-191f0d11130e',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 5914717015,
			'resultType': 'rtpcr',
			'activateTime': '2020-05-09 02:41:16',
			'resultTime': '2015-03-27 05:39:56'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '669492f0-8b2e-4a46-b27c-4615cb08d6a9'
				}
			}
		}
	}, {
		'id': '118395cd-1643-407d-bb75-bb0558f404f1',
		'type': 'sample',
		'attributes': {
			'result': 'negative',
			'barCode': 6164492361,
			'resultType': 'antibody',
			'activateTime': '2021-01-26 09:29:48',
			'resultTime': '2015-11-13 11:50:51'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '1f386334-6618-459e-b1f2-fc53ad1affd4'
				}
			}
		}
	}, {
		'id': '70819288-35c1-4551-8662-2a2e9c211256',
		'type': 'sample',
		'attributes': {
			'result': 'negative',
			'barCode': 7603170255,
			'resultType': 'antibody',
			'activateTime': '2021-11-21 12:29:16',
			'resultTime': '2014-02-17 02:39:31'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '16071cd6-1096-4ee3-8b5a-a90765241be6'
				}
			}
		}
	}, {
		'id': '843ef400-f213-4d8f-bc51-0cd4b7d97399',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 4812012234,
			'resultType': 'antibody',
			'activateTime': '2021-05-27 05:54:46',
			'resultTime': '2020-07-20 11:18:03'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': 'd576892a-2abc-46dc-b6a2-e06c3517799b'
				}
			}
		}
	}, {
		'id': '9d3b090d-9ad6-4432-a2b5-c9f44534c56f',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 11656248577,
			'resultType': 'antibody',
			'activateTime': '2021-06-09 10:52:39',
			'resultTime': '2021-01-10 12:45:20'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': 'a84fbe54-db14-4ad9-951a-73e026b26cdc'
				}
			}
		}
	}, {
		'id': 'e87165c4-1de3-4270-ab69-9b51a2e68ba7',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 6194847662,
			'resultType': 'antibody',
			'activateTime': '2020-02-23 05:28:32',
			'resultTime': '2018-04-17 12:53:43'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '701c87e5-c1b0-428c-b605-62bbfd4d1497'
				}
			}
		}
	}, {
		'id': '6620d6e7-f427-4465-8ffd-c2bc8321e4a3',
		'type': 'sample',
		'attributes': {
			'result': 'negative',
			'barCode': 12180927054,
			'resultType': 'antigen',
			'activateTime': '2021-03-14 07:15:58',
			'resultTime': '2016-01-02 12:42:58'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '2645058e-6b07-4f76-9e9e-93b3674b2451'
				}
			}
		}
	}, {
		'id': 'f9c0f190-6a70-4575-81e1-365a94d48f81',
		'type': 'sample',
		'attributes': {
			'result': 'negative',
			'barCode': 11726016776,
			'resultType': 'antibody',
			'activateTime': '2020-03-07 10:01:35',
			'resultTime': '2016-07-23 07:49:03'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '3b3c0810-53a8-4bfc-ad8e-73dfd885295f'
				}
			}
		}
	}, {
		'id': 'f2313ea9-4174-42ca-a1e1-bebf3194cb59',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 11699463535,
			'resultType': 'rtpcr',
			'activateTime': '2020-05-02 11:02:22',
			'resultTime': '2020-09-05 10:04:23'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '8413a7de-479f-46c9-9928-9314c2f318df'
				}
			}
		}
	}, {
		'id': '6371d59e-232d-42fb-b061-76f96821c141',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 11098165831,
			'resultType': 'antigen',
			'activateTime': '2021-10-26 03:14:00',
			'resultTime': '2018-12-03 01:21:22'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '2bbc6b43-f47b-4166-aeec-3b4c027efe10'
				}
			}
		}
	}, {
		'id': 'baae3c8f-50f3-4794-b20d-30fd25eba746',
		'type': 'sample',
		'attributes': {
			'result': 'negative',
			'barCode': 8539681058,
			'resultType': 'antibody',
			'activateTime': '2020-07-27 03:56:18',
			'resultTime': '2019-04-30 09:54:15'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': 'e07e3c5e-d7ed-42b7-bd61-8ce229cad4de'
				}
			}
		}
	}, {
		'id': '71e45f29-2880-4378-9aa3-aa6d0d32a2ba',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 7074145937,
			'resultType': 'antigen',
			'activateTime': '2021-12-03 02:37:09',
			'resultTime': '2016-03-24 08:12:41'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': 'cd57130a-f1bc-45ee-ac1a-90f3835f2259'
				}
			}
		}
	}, {
		'id': 'ec1e4078-7bb6-473f-8c73-444a82e23fac',
		'type': 'sample',
		'attributes': {
			'result': 'positive',
			'barCode': 3087936246,
			'resultType': 'rtpcr',
			'activateTime': '2022-02-01 10:20:18',
			'resultTime': '2014-03-08 12:54:32'
		},
		'relationships': {
			'profile': {
				'data': {
					'type': 'profile',
					'id': '55429a06-45db-4502-bf1d-723dd8d8ecfb'
				}
			}
		}
	}],
	'included': [{
		'type': 'profile',
		'id': '0b4e583a-0398-41e5-b946-b86836f723db',
		'attributes': {
			'name': 'Alana Savage',
			'patientId': 5908819395
		}
	}, {
		'type': 'profile',
		'id': 'f372af18-471f-43b1-8341-684eaa5a5a65',
		'attributes': {
			'name': 'Rochelle Slater',
			'patientId': 9403838552
		}
	}, {
		'type': 'profile',
		'id': '1f7d7302-20d9-49fe-92e3-b925fd878f1b',
		'attributes': {
			'name': 'Clarice Moran',
			'patientId': 4476819113
		}
	}, {
		'type': 'profile',
		'id': 'ee81882f-ac37-4490-9f44-524db6df7191',
		'attributes': {
			'name': 'Blackwell Salas',
			'patientId': 9485571804
		}
	}, {
		'type': 'profile',
		'id': '96ba969e-d85b-40bc-9da4-066a0e2a3e43',
		'attributes': {
			'name': 'Melva Petersen',
			'patientId': 11447352440
		}
	}, {
		'type': 'profile',
		'id': '9fac0d26-a2d2-45c6-97c8-cd9e376f97e2',
		'attributes': {
			'name': 'Tamara Buckner',
			'patientId': 6827523629
		}
	}, {
		'type': 'profile',
		'id': '8610dd3f-73f2-405c-b448-bf1c1ca71bc5',
		'attributes': {
			'name': 'Molina Rowe',
			'patientId': 8520113396
		}
	}, {
		'type': 'profile',
		'id': 'f704b375-df98-4bb6-8265-34fcdb5367c4',
		'attributes': {
			'name': 'Sanford Cohen',
			'patientId': 4232166543
		}
	}, {
		'type': 'profile',
		'id': '62c220fc-bcde-4ad4-8765-06f934261573',
		'attributes': {
			'name': 'Lindsay Gentry',
			'patientId': 11831562682
		}
	}, {
		'type': 'profile',
		'id': '92817b6a-7887-4a00-a02b-e67f33a27234',
		'attributes': {
			'name': 'Crosby Rosales',
			'patientId': 5651733813
		}
	}, {
		'type': 'profile',
		'id': '6b88f572-9445-4138-bb10-80771ac45683',
		'attributes': {
			'name': 'Elvia Mccoy',
			'patientId': 1463803951
		}
	}, {
		'type': 'profile',
		'id': '2f97cde8-a3bc-400d-9c71-5b7d8e4f2ca3',
		'attributes': {
			'name': 'Jimmie Sellers',
			'patientId': 5753948954
		}
	}, {
		'type': 'profile',
		'id': 'ece8dbfa-d532-4a9a-9aac-0514ad35f8d4',
		'attributes': {
			'name': 'Robert Durham',
			'patientId': 9023247097
		}
	}, {
		'type': 'profile',
		'id': '307c5efc-bfe3-46ce-87bf-b0c7b466d8d4',
		'attributes': {
			'name': 'Sherrie Key',
			'patientId': 5556606561
		}
	}, {
		'type': 'profile',
		'id': 'c34b22f8-e25c-4c01-befd-b07a76df6f28',
		'attributes': {
			'name': 'Phelps Flowers',
			'patientId': 11073128202
		}
	}, {
		'type': 'profile',
		'id': '15c31bfa-522b-4dbd-aa69-80abc1771413',
		'attributes': {
			'name': 'Denise Calhoun',
			'patientId': 1729748516
		}
	}, {
		'type': 'profile',
		'id': '331023bb-f493-412a-9fca-d6e21a3dfccf',
		'attributes': {
			'name': 'Odessa Wilson',
			'patientId': 3891144493
		}
	}, {
		'type': 'profile',
		'id': '669492f0-8b2e-4a46-b27c-4615cb08d6a9',
		'attributes': {
			'name': 'Katina Riggs',
			'patientId': 3895115805
		}
	}, {
		'type': 'profile',
		'id': '1f386334-6618-459e-b1f2-fc53ad1affd4',
		'attributes': {
			'name': 'Reva Kramer',
			'patientId': 10391579843
		}
	}, {
		'type': 'profile',
		'id': '16071cd6-1096-4ee3-8b5a-a90765241be6',
		'attributes': {
			'name': 'Jerri Woods',
			'patientId': 6695679973
		}
	}, {
		'type': 'profile',
		'id': 'd576892a-2abc-46dc-b6a2-e06c3517799b',
		'attributes': {
			'name': 'Alyce Moss',
			'patientId': 5034770681
		}
	}, {
		'type': 'profile',
		'id': 'a84fbe54-db14-4ad9-951a-73e026b26cdc',
		'attributes': {
			'name': 'Watkins Cole',
			'patientId': 5344698480
		}
	}, {
		'type': 'profile',
		'id': '701c87e5-c1b0-428c-b605-62bbfd4d1497',
		'attributes': {
			'name': 'Ilene Burgess',
			'patientId': 11867392565
		}
	}, {
		'type': 'profile',
		'id': '2645058e-6b07-4f76-9e9e-93b3674b2451',
		'attributes': {
			'name': 'Shannon Dillard',
			'patientId': 7935772247
		}
	}, {
		'type': 'profile',
		'id': '3b3c0810-53a8-4bfc-ad8e-73dfd885295f',
		'attributes': {
			'name': 'House Lane',
			'patientId': 3591153141
		}
	}, {
		'type': 'profile',
		'id': '8413a7de-479f-46c9-9928-9314c2f318df',
		'attributes': {
			'name': 'Mavis Lynn',
			'patientId': 10313838353
		}
	}, {
		'type': 'profile',
		'id': '2bbc6b43-f47b-4166-aeec-3b4c027efe10',
		'attributes': {
			'name': 'Pruitt Rosario',
			'patientId': 8924012967
		}
	}, {
		'type': 'profile',
		'id': 'e07e3c5e-d7ed-42b7-bd61-8ce229cad4de',
		'attributes': {
			'name': 'Charity Ballard',
			'patientId': 3975870056
		}
	}, {
		'type': 'profile',
		'id': 'cd57130a-f1bc-45ee-ac1a-90f3835f2259',
		'attributes': {
			'name': 'Shaw Giles',
			'patientId': 11257134511
		}
	}, {
		'type': 'profile',
		'id': '55429a06-45db-4502-bf1d-723dd8d8ecfb',
		'attributes': {
			'name': 'Willa Smith',
			'patientId': 6725237642
		}
	}],
    meta: {
        total: 30,
    }
};

}

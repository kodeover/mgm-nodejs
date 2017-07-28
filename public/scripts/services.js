'use stroict';

angular.module('mgmApp')

    .service('dataFactory', [function () {
        var products = {
            'super123': [
                {
                    'id': 's0',
                    'modelName': 'S0',
                    'category': 'super123',
                    'motto': 'Perfect pentru solutii casnice.',
                    'description': 'dfewfewfewfewfwefewfewffwefewfwefewf dscvdsdwccew wdcwecewcewcewcewcc  dwcvewcsc dsdvdw  dw dw',
                    'dimensions': {
                        'height': [1.5, 1.9],
                        'length': [0.6, 1.2],
                        'width': [0.32, 0.8],
                        'weight': [150, 200]
                    }
                },
                {
                    'id': 's1',
                    'modelName': 'S1',
                    'category': 'super123',
                    'motto': 'Perfect pentru solutii casnice.',
                    'description': 'dfewfewfewfewfwefewfewffwefewfwefewf csc dsdvdewcewcew devewcewcewc edvewcewcew df wevwevd ervwevw  dw dw',
                    'dimensions': {
                        'height': [1.5, 1.9],
                        'length': [0.6, 1.2],
                        'width': [0.32, 0.8],
                        'weight': [150, 200]
                    }
                },
                {
                    'id': 's2',
                    'modelName': 'S2',
                    'category': 'super123',
                    'motto': 'Perfect pentru solutii casnice.',
                    'description': 'dfewfewfewfewfwefewfewffwefewfwefewf csc efew  er r rver er er er er ervrevef ef ef efveecewce ew wew rwrewr ef ef edsdvdw  dw dw',
                    'dimensions': {
                        'height': [1.5, 1.9],
                        'length': [0.6, 1.2],
                        'width': [0.32, 0.8],
                        'weight': [150, 200]
                    }
                },
                {
                    'id': 's3',
                    'modelName': 'S3',
                    'category': 'super123',
                    'motto': 'Perfect pentru solutii casnice.',
                    'description': 'dfewfewfewfewfwefewfewffwefewfwefewf csc dsdvdw  dw dw',
                    'dimensions': {
                        'height': [1.5, 1.9],
                        'length': [0.6, 1.2],
                        'width': [0.32, 0.8],
                        'weight': [150, 200]
                    }
                }

            ]
        };

        var highlights = {'highlights': [
            {
                'icon': 'clockwise.svg',
                'title': 'Quick Installation',
                'content': 'The installation of the system is very quick and easy.'
            },
            {
                'icon': 'bolts.svg',
                'title': 'Fără șuruburi',
                'content': 'Instalarea se face fără șuruburi.'
            },
            {
                'icon': 'arrows-mix.svg',
                'title': 'Versatile',
                'content': 'The modular nature of the Super123 system ...'
            },
            {
                'icon': 'drought.svg',
                'title': 'Rustproof',
                'content': 'The Super123 line is made of rustproof galvanized zinc coated steel.'
            },
            {
                'icon': 'recommended.svg',
                'title': 'High Quality',
                'content': 'The Super123 is made from certified steel and carries the approval mark of TUV product service Gmbh.'
            },
            {
                'icon': 'weight_blue.svg',
                'title': 'Maximum Load Capacity',
                'content': 'The maximum uniformly distributed load (UDL) capacity is dependent on the configuration '
            }



        ]}

        var rezidentialHighlights =  {'highlights': [
            {
                'icon': 'clockwise.svg',
                'title': 'Quick Installation',
                'content': 'The installation of the system is very quick and easy.'
            },
            {
                'icon': 'bolts.svg',
                'title': 'Fără șuruburi',
                'content': 'Instalarea se face fără șuruburi.'
            },
            {
                'icon': 'arrows-mix.svg',
                'title': 'Versatile',
                'content': 'The modular nature of the Super123 system ...'
            },
            {
                'icon': 'drought.svg',
                'title': 'Rustproof',
                'content': 'The Super123 line is made of rustproof galvanized zinc coated steel.'
            },
            {
                'icon': 'recommended.svg',
                'title': 'High Quality',
                'content': 'The Super123 is made from certified steel and carries the approval mark of TUV product service Gmbh.'
            },
            {
                'icon': 'weight_blue.svg',
                'title': 'Maximum Load Capacity',
                'content': 'The maximum uniformly distributed load (UDL) capacity is dependent on the configuration '
            }



        ]}

        this.getProducts = function () {
            return products;
        }

        this.getHighlights = function () {
            return highlights;
        }

        this.getRezidentialHighs = function () {
            return rezidentialHighlights;
        }

    }])
